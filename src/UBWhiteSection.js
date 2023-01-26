import NewSectionRef from "./NewSectionRef"
const UBWhiteSection = props => {
  const ref = NewSectionRef(props)
  return (
    <div ref={ref} id={props.id} className="whitesec">
      <div className="whitetext sectionhalf">
        <h2>{props.text.header}</h2>
        {props.text.description.split("\n").map((text, i) => (
          <p key={props.id + "-p" + i}>{text}</p>
        ))}
      </div>
      <div className="whiteimg sectionhalf">
        <img src={props.text.image}/>
      </div>
    </div>
  )
}
export default UBWhiteSection