import NewSectionRef from "./NewSectionRef"
import Embed from './EmbedSocial.js';
const Latest = props => {
    const ref = NewSectionRef(props)
    return (
        <div ref={ref} id={props.id} className="redsec">
            <div id="latesttext">
            <h2>{props.text.header}</h2>
                <Embed/>
            </div>
        </div>
    );
}
export default Latest