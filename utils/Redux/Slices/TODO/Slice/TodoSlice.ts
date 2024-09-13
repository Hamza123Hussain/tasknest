// utils/Redux/Slices/TodoSlice.ts
import { createSlice } from '@reduxjs/toolkit'
import { TodoState } from '@/utils/TodoInterface'
import { AddTodo } from '../Functions/AddElement'
import { AddTaskToTodo } from '../Functions/AddNewTask'
import { ToggleTaskCompletion } from '../Functions/CompleteTask'
import { RemoveTodo } from '../Functions/RemoveTask'
const loadFromLocalStorage = (): TodoState['todo'] => {
  const savedTodos = localStorage.getItem('todos')
  return savedTodos ? JSON.parse(savedTodos) : []
}
const initialState: TodoState = {
  todo: loadFromLocalStorage(),
}
export const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState,
  reducers: {
    NewElement: AddTodo,
    NewTask: AddTaskToTodo,
    CompleteTask: ToggleTaskCompletion,
    RemoveElement: RemoveTodo,
  },
})
export const { NewElement, NewTask, CompleteTask, RemoveElement } =
  TodoSlice.actions

export const TodoReducer = TodoSlice.reducer
