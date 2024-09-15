import { TodoState } from '@/utils/TodoInterface'

export const RemoveTask = (
  state: TodoState,
  action: { payload: { todoId: string; taskID: string } }
) => {
  const { todoId, taskID } = action.payload
  const todo = state.todo.find((t) => t._id === todoId)
  if (todo) {
    todo.Tasks = todo.Tasks.filter((task) => task.ID !== taskID)
  }
}
