import { useState, useEffect } from 'react'
import '../assets/css/notepad.css'
import TodoItem from './TodoItem'
import TodoAddForm from './TodoAddForm'
import Pagination from './Pagination'
import useShowTodo from '../hooks/useShowTodo'
import Loading from './Loading'

const Notepad = () => {  
  const [page, setPage] = useState(1)
  const { isLoading, todoItems } = useShowTodo(page)

  return (
    <div className="notepad-container">
      <div className="notepad-header">
        <h1>ToDo</h1>
      </div>

      <TodoAddForm />

      <div className="todo_container">
        { isLoading ? <Loading text='Загрузка' />
          :
          todoItems.map(todo => {
            return (
              <TodoItem key={ todo.id } todo={ todo }/>
            )
          })
        }
      </div>
      
      <Pagination page={ page } setPage={ setPage } todoItems={ todoItems } />
    </div>
  )
}

export default Notepad