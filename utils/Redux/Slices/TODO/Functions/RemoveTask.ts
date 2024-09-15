// utils/Redux/Slices/TODO/Functions/RemoveTask.ts
import { TodoState } from '@/utils/TodoInterface'
export const RemoveTodo = (state: TodoState, action: { payload: string }) => {
  state.todo = state.todo.filter((todo) => todo._id !== action.payload)
}
