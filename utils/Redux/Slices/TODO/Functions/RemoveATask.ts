import { TodoState } from '@/utils/TodoInterface'
import { saveToLocalStorage } from './SaveToLocal'
export const RemoveTask = (
  state: TodoState,
  action: { payload: { todoId: string; taskID: string } }
) => {
  const { todoId, taskID } = action.payload
  const todo = state.todo.find((t) => t.id === todoId)
  if (todo) {
    // Ensure that todo.Tasks is initialized as an array
    if (!todo.Tasks) {
      todo.Tasks = []
    }
    todo.Tasks = todo.Tasks.filter((element) => element.ID !== taskID)
    saveToLocalStorage(state.todo)
  }
}
