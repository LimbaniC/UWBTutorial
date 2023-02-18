import NewSectionRef from "./NewSectionRef"
const UBTestimonials = props => {
  const ref = NewSectionRef(props)
  return (
    <div ref={ref} id={props.id} className="whitesec">
        <h2>{props.text.header}</h2>
        <p>{props.text.description}</p>
        {props.text.quotes.map((quote, i) => (
            <div className="quote">
                <img src={quote.image}/>
                <p>{quote.text}</p>
            </div>
        ))}
    </div>
  )
}
export default UBTestimonials