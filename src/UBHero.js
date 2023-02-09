import NewSectionRef from "./NewSectionRef"
const UBHero = props => {
  const ref = NewSectionRef(props)
  return (
    <div ref={ref} id={props.id} style={{backgroundImage: `url(${props.text.image})`}}>
      <div id="heroimg">
        {/*<img src={props.text.image}/>*/}
      </div>
      <div id="herotext">
        <h1>{props.text.header}</h1>
        <p>{props.text.description}</p>
        <a href={props.text.formlink}>{props.text.button}</a>
      </div>
    </div>
  )
}
export default UBHero