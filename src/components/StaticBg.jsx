import { useRef } from "react"

const StaticBg = () => {
  const ref = useRef()
  const hideBg = () => {
    ref.current.classList.add('hide')
    const todoItem = document.querySelector('.todo_item-container.open')
    todoItem.classList.remove('open')
  }

  return (
    <div className="static-bg hide" ref={ ref } onClick={ hideBg } />
  )
}

export default StaticBg