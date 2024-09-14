import { TodoState, Todo } from '@/utils/TodoInterface'
import { saveToLocalStorage } from './SaveToLocal'
export const AddTodo = (
  state: TodoState,
  action: { payload: { id: string; text: string; userEmail: string } }
) => {
  const newTodo: Todo = {
    id: action.payload.id, // Use the id passed in the payload
    Text: action.payload.text,
    Tasks: [],
    CreatedAt: new Date(),
  }
  state.todo.push(newTodo)
  saveToLocalStorage(state.todo)
}
