import base64
from os import path

from docusign_esign import EnvelopesApi, EnvelopeDefinition, Document, Signer, CarbonCopy, SignHere, Tabs, Recipients

from ...jwt_helpers import create_api_client
from ...jwt_config import demo_docs_path


class Eg002SigningViaEmailController:

    @classmethod
    def worker(cls, args, doc_docx_path, doc_pdf_path):
        """
        1. Create the envelope request object
        2. Send the envelope
        """

        envelope_args = args["envelope_args"]
        # 1. Create the envelope request object
        envelope_definition = cls.make_envelope(envelope_args, doc_pdf_path)
        api_client = create_api_client(base_path=args["base_path"], access_token=args["access_token"])
        # 2. call Envelopes::create API method
        # Exceptions will be caught by the calling function
        envelopes_api = EnvelopesApi(api_client)
        results = envelopes_api.create_envelope(account_id=args["account_id"], envelope_definition=envelope_definition)

        envelope_id = results.envelope_id

        return {"envelope_id": envelope_id}

    @classmethod
    def make_envelope(cls, args, doc_pdf_path):
        """
        Creates envelope
        Document: An PDT document of sign up document. COuld also use a docx file.
        DocuSign will convert all of the documents to the PDF format.
        The recipients" field tags are placed using <b>anchor</b> strings.
        """

        # The envelope has two recipients.
        # recipient 1 - signer
        # recipient 2 - cc
        # The envelope will be sent first to the signer.
        # After it is signed, a copy is sent to the cc person.

        # create the envelope definition
        env = EnvelopeDefinition(
            email_subject="Please sign this document set"
        )

        # Read file from a local directory
        # The reads could raise an exception if the file is not available!
        with open(path.join(demo_docs_path, doc_pdf_path), "rb") as file:
            doc_pdf_bytes = file.read()
        doc_b64 = base64.b64encode(doc_pdf_bytes).decode("ascii")

        # Create the document models
        document = Document(  # create the DocuSign document object
            document_base64=doc_b64,
            name="Upward Bound Sign Up Form",  # can be different from actual file name
            file_extension="pdf",  # many different document types are accepted
            document_id="1"  # a label used to reference the doc
        )
        # The order in the docs array determines the order in the envelope
        env.documents = [document]

        # Create the signer recipient model
        signer1 = Signer(
            email=args["signer_email"],
            name=args["signer_name"],
            recipient_id="1",
            routing_order="1"
        )
        # routingOrder (lower means earlier) determines the order of deliveries
        # to the recipients. Parallel routing order is supported by using the
        # same integer as the order for two or more recipients.

        # create a cc recipient to receive a copy of the documents
        cc1 = CarbonCopy(
            email=args["cc_email"],
            name=args["cc_name"],
            recipient_id="2",
            routing_order="2"
        )

        # Add the recipients to the envelope object
        recipients = Recipients(signers=[signer1], carbon_copies=[cc1])
        env.recipients = recipients

        # Request that the envelope be sent by setting |status| to "sent".
        # To request that the envelope be created as a draft, set to "created"
        env.status = args["status"]

        return env
