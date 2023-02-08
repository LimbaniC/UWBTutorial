import { Helmet } from 'react-helmet';

function Embed() {
    return (
        <div style={{ position: 'relative', left: '0px', top: '0px', width: '100vw'}}>
            <Helmet>
                <script src="https://widget.taggbox.com/embed-lite.min.js" type="text/javascript"></script>
            </Helmet>
            <div className="taggbox" style={{ position: 'relative', padding: '0px', width: '90%', height: '100%' }} data-widget-id="121039" data-tags="false" />
        </div>
    );
}

export default Embed