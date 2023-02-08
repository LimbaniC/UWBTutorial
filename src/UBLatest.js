import NewSectionRef from "./NewSectionRef"
import Embed from './EmbedSocial.js';
const Latest = props => {
    const ref = NewSectionRef(props)
    return (
        <div ref={ref} id={props.id} className="redsec">
            <div id="latesttext">
            <h1>{props.text.header}</h1>
                <Embed/>
            </div>
        </div>
    );
}
export default Latest