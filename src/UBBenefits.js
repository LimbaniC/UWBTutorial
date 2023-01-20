import NewSectionRef from "./NewSectionRef.js"
const UBBenefits = props => {
  const ref = NewSectionRef(props)
  return (
    <div ref={ref} id={props.id} className="redsec">
      <div id="benefitsimg" className="sectionhalf">
        <img src={props.text.image}/>
      </div>
      <div id="benefitstext" className="sectionhalf">
        <h2>{props.text.header}</h2>
        {props.text.types.map(type => (
          <div key={type.header} className="benefittype">
            <div className="typeicon">
              <img src={type.icon}/>
            </div>
            <div className="typetext">
              <h3>{type.header}</h3>
              {type.bullets.map((bullet, i) => (
                <ul key={type.header + i}><li>{bullet}</li></ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default UBBenefits