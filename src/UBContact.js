import NewSectionRef from "./NewSectionRef"
const UBContact = props => {
  const ref = NewSectionRef(props)
  return (
    <div ref={ref} id={props.id} className="redsec"> {/* insert redsec or whitesec in the className attribute as specified for each section. */}
        <div className="sectionquarter">
            <img src={props.text.image}/>
            <h4>{props.text.description}</h4>
            <p>Made with &#128151; by BUILD UMass</p>
        </div>
        {
            props.text.sections.map(section=>{
               return <div className="sectionquarter">
                    <h3>{section.header}</h3>
                    {
                        section.texts.map(text=>{
                            return <p><a href={text.link}>{text.text}</a>
                            </p>
                        })
                    }
                </div>
            })
        }
    </div>
  );
}
export default UBContact

