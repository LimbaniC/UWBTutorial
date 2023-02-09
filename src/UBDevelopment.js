import NewSectionRef from "./NewSectionRef"
const UBDevelopment = props => {
  const ref = NewSectionRef(props)
  return (
    <div ref={ref} id={props.id} className="whitesec">
      <div className="whitetext sectionhalf">
        <h2>{props.text.header}</h2>
        {props.text.programs.map((program, i) => (
            <div>
                <h3 key={program.header}>{program.header}</h3>
                <p key={program.header + i}>{
                    Array.isArray(program.text) ? (
                        <ul>
                            {program.text.map(bullet => (<li>{bullet}</li>))}
                        </ul>
                    ) : program.text
                }</p>
            </div>
        ))}
      </div>
      <div className="whiteimg sectionhalf">
        <img src={props.text.image}/>
      </div>
    </div>
  )
}
export default UBDevelopment