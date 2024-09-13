import { TodoState } from '@/utils/TodoInterface'
import { saveToLocalStorage } from './SaveToLocal'

export const removeTodoReducer = (
  state: TodoState,
  action: { payload: string }
) => {
  state.todo = state.todo.filter((todo) => todo.id !== action.payload)
  saveToLocalStorage(state.todo)
}
