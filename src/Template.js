/* Note: This template file is for reference only. Copy this file and rename it to the name of your component, as well as the name of the file and the name of the function. */
/* After you have completed your component, import it into App.js. See the existing components for reference. */
/* New CSS should be added to src/css/styles.css. Give your div or img a unique id and use that id to style your component. Do not change the existing CSS. */
/* New images should be added to src/images and should be accessed using the following format: <img src={props.text.(path to image)}/> */
/* To create text for your section, create a new object in sitetext.json. See the existing JSON objects for reference. */
import NewSectionRef from "./NewSectionRef"
const Template = props => {
  const ref = NewSectionRef(props)
  return (
    <div ref={ref} id={props.id} className=""> {/* insert redsec or whitesec in the className attribute as specified for each section. */}
        {/* 
            Insert your content here. 
            Site text and images should ONLY be stored in src/text/sitetext.json and should ONLY be accessed using the props.text.(section).(content) format.
            For reference, see src/UBHero.js.
        */}
    </div>
  );
}
export default Template