import useScrollHandler from "./ScrollHandler"
const UBNav = props => {
  return (
    <nav id="nav" className={useScrollHandler() >= 100 ? "scrolled" : ""}>
      <img id="logo"></img>
      <ul>
        {Object.keys(props.text).map(section => (
          <li key={section} className={props.curSection == section ? "selected" : ""}><a href={"#" + section}>{props.text[section]}</a></li>
        ))}
      </ul>
    </nav>
  )
}
export default UBNav