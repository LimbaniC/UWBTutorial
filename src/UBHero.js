import NewSectionRef from "./NewSectionRef"
const UBHero = props => {
  const ref = NewSectionRef(props)
  return (
    <div ref={ref} id={props.id} className="redsec">
      <div id="heroimg">
        <img src={props.text.image}/>
      </div>
      <div id="herotext">
        <h1>{props.text.header}</h1>
        <p>{props.text.description}</p>
      </div>
    </div>
  )
}
export default UBHero