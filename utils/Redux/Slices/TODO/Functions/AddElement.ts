// utils/Redux/Reducers/todoReducers.ts
import { TodoState, Todo } from '@/utils/TodoInterface'
import { nanoid } from '@reduxjs/toolkit'
import { saveToLocalStorage } from './SaveToLocal'
export const AddTodo = (state: TodoState, action: { payload: string }) => {
  const newTodo: Todo = {
    id: nanoid(),
    Text: action.payload,
    Tasks: [],
  }
  state.todo.push(newTodo)
  saveToLocalStorage(state.todo)
}
