import TodoItemService from '../services/todo_item.service'
import { useQuery } from 'react-query'

const useTodoItems = (page) => {
  const { isLoading, data: todoItems } = useQuery(['show todo', page], () => TodoItemService.getAll(page), {
    onError: (error) => {
      alert(error.message)
    }
  })
  return { isLoading, todoItems }
}

export default useTodoItems