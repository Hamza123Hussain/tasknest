import { TodoState } from '@/utils/TodoInterface'
export const ToggleTaskCompletion = (
  state: TodoState,
  action: { payload: { todoId: string; taskId: string } }
) => {
  const { todoId, taskId } = action.payload
  const todo = state.todo.find((t) => t._id === todoId)

  if (todo) {
    const task = todo.Tasks.find((task) => task._id === taskId)
    if (task) {
      task.ISDone = !task.ISDone
    }
  }
}
