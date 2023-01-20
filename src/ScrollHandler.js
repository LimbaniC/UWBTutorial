import {useState, useEffect} from "react"
const useScrollHandler = () => {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY)
    }

    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll, setScroll])

  return scroll
}
export default useScrollHandler