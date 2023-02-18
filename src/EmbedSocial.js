import { Helmet } from 'react-helmet';

function Embed() {
    return (
        <div style={{width: '100%'}}>
            <Helmet>
                <script src="https://widget.taggbox.com/embed-lite.min.js" type="text/javascript"></script>
            </Helmet>
            <div className="taggbox" style={{width: '100%'}} data-widget-id="121039" data-tags="false" />
        </div>
    );
}

export default Embed