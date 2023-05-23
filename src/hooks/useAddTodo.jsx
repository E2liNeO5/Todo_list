import TodoItemService from '../services/todo_item.service'
import { useMutation, useQueryClient } from 'react-query'

const useAddTodo = ({ formShow }) => {
  const QueryClient = useQueryClient()
  const { mutate } = useMutation('add todo', (data) => TodoItemService.addItem(data), {
    onSuccess: (data) => {
      formShow()
      QueryClient.invalidateQueries('show todo')
    },
    onError: (error) => {
      alert(error.message)
    }
  })

  return { mutate }
}

export default useAddTodo