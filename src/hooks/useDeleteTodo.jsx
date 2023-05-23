import { useMutation } from "react-query"
import TodoItemService from "../services/todo_item.service"

const useDeleteTodo = ({ id, queryClient }) => {
  const { mutate } = useMutation(['delete todo', id], () => TodoItemService.deleteItem(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('show todo')
    },
    onError: (error) => {
      alert(error.message)
    }
  })

  return { mutate }
}

export default useDeleteTodo