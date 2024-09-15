import { TodoState, Todo } from '@/utils/TodoInterface'

export const AddTodo = (
  state: TodoState,
  action: { payload: { id: string; text: string; userEmail: string } }
) => {
  const newTodo: Todo = {
    _id: action.payload.id, // Use the id passed in the payload
    Text: action.payload.text,
    Tasks: [],
    CreatedAt: new Date(),
  }
  state.todo.push(newTodo)
}
