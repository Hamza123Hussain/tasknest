// utils/Redux/Slices/TodoSlice.ts
import { createSlice } from '@reduxjs/toolkit'
import { TodoState } from '@/utils/TodoInterface'
import { addTodoReducer } from '../Functions/AddElement'
import { addTaskToTodoReducer } from '../Functions/AddNewTask'
import { removeTodoReducer } from '../Functions/RemoveTask'
import { toggleTaskCompletionReducer } from '../Functions/CompleteTask'
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
    AddTodo: addTodoReducer,
    AddTaskToTodo: addTaskToTodoReducer,
    RemoveTodo: removeTodoReducer,
    ToggleTaskCompletion: toggleTaskCompletionReducer,
  },
})
export const { AddTodo, AddTaskToTodo, RemoveTodo, ToggleTaskCompletion } =
  TodoSlice.actions
export const TodoReducer = TodoSlice.reducer
