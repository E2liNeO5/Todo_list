import { useCallback, useEffect, useRef } from 'react'
import '../assets/css/todo_item.css'
import AnimationService from '../services/animation.service'
import { useQueryClient } from 'react-query'
import useDeleteTodo from '../hooks/useDeleteTodo'

const TodoItem = ({ todo }) => {
  const refItem = useRef()
  const queryClient = useQueryClient()

  const { mutate } = useDeleteTodo({ id: todo.id, queryClient })

  const deleteItem = useCallback(() => async () => {
    const [ corner1, corner2 ] = refItem.current.querySelectorAll('.corner')
    corner1.classList.add('deleting')
    corner2.classList.add('deleting')
    refItem.current.classList.add('deleting')
    setTimeout(mutate, 800)
  })

  const openTodo = () => {
    const bg = document.querySelector('.static-bg')
    bg.classList.remove('hide')
    refItem.current.classList.add('open')
  }
  
  return (
    <div className="todo_item-container" ref={ refItem } >
      <span className="corner" onClick={ deleteItem() }></span>
      <span className="corner"></span>
      <div className="todo_item-title">{ todo.title }</div>
      <div className="todo_item-text" onClick={ openTodo }>{ todo.text }</div>
    </div>
  )
}

export default TodoItem