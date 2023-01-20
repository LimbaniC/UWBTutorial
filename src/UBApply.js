import NewSectionRef from "./NewSectionRef.js"
const UBApply = props => {
  const ref = NewSectionRef(props)
  return (
    <div ref={ref} id={props.id} className="whitesec">
      <div id="applybox">
        <h2>{props.text.header}</h2>
        <p>{props.text.description}</p>
        <div><a href={props.text.formlink}>{props.text.button}</a></div>
      </div>
    </div>
  )
}
export default UBApply