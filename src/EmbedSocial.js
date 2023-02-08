import { Helmet } from 'react-helmet';

function Embed() {
    return (
        <div>
            <Helmet>
                <script src="https://widget.taggbox.com/embed-lite.min.js" type="text/javascript"></script>
            </Helmet>
            <div className="taggbox" style={{ position: 'relative', left: '-30px', top: '0px', width: '25%', height: '25%' }} data-widget-id="121039" data-tags="false" />
        </div>
    );
}

export default Embed