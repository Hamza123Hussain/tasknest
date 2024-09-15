import { TodoState } from '@/utils/TodoInterface'
import { nanoid } from '@reduxjs/toolkit'

export const AddTaskToTodo = (
  state: TodoState,
  action: { payload: { todoId: string; taskText: string } }
) => {
  const { todoId, taskText } = action.payload
  const todo = state.todo.find((t) => t._id === todoId)

  if (todo) {
    // Ensure that todo.Tasks is initialized as an array
    if (!todo.Tasks) {
      todo.Tasks = []
    }

    const newTask = {
      _id: nanoid(),
      Text: taskText,
      ISDone: false,
      CreatedAt: new Date().toISOString(),
    }
    todo.Tasks.push(newTask)
  }
}
