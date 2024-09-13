import { TodoState } from '@/utils/TodoInterface'
import { saveToLocalStorage } from './SaveToLocal'

export const toggleTaskCompletionReducer = (
  state: TodoState,
  action: { payload: { todoId: string; taskId: string } }
) => {
  const { todoId, taskId } = action.payload
  const todo = state.todo.find((t) => t.id === todoId)

  if (todo) {
    const task = todo.Tasks.find((task) => task.ID === taskId)
    if (task) {
      task.ISDone = !task.ISDone
      saveToLocalStorage(state.todo)
    }
  }
}
