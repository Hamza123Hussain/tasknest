// utils/Redux/Slices/TODO/Functions/RemoveTask.ts
import { TodoState } from '@/utils/TodoInterface'
import { saveToLocalStorage } from './SaveToLocal'
export const RemoveTodo = (state: TodoState, action: { payload: string }) => {
  state.todo = state.todo.filter((todo) => todo.id !== action.payload)
  saveToLocalStorage(state.todo)
}
