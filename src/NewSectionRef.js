import useScrollHandler from './ScrollHandler.js'
import {useRef} from 'react'
import {useEffect} from "react"
const NewSectionRef = props => {
  const ref = useRef()
  const position = useScrollHandler() + 100
  useEffect(() => {
    const top = ref.current.offsetTop
    const height = ref.current.clientHeight
    if (position >= top && position <= top + height) {
      props.setSection(props.id)
    }
  })
  return ref
}
export default NewSectionRef