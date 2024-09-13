import { TodoState } from '@/utils/TodoInterface'
import { nanoid } from '@reduxjs/toolkit'
import { saveToLocalStorage } from './SaveToLocal'
export const AddTaskToTodo = (
  state: TodoState,
  action: { payload: { todoId: string; taskText: string } }
) => {
  const { todoId, taskText } = action.payload
  const todo = state.todo.find((t) => t.id === todoId)

  if (todo) {
    const newTask = {
      ID: nanoid(),
      Text: taskText,
      ISDone: false,
      CreatedAt: new Date(),
    }
    todo.Tasks.push(newTask)
    saveToLocalStorage(state.todo)
  }
}
