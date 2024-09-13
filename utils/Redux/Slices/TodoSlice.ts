import { Todo, TodoState } from '@/utils/TodoInterface'
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
const loadFromLocalStorage = (): Todo[] => {
  const savedTodos = localStorage.getItem('todos')
  return savedTodos ? JSON.parse(savedTodos) : []
}
const saveToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}
const initialState: TodoState = {
  todo: loadFromLocalStorage(),
}
export const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState,
  reducers: {
    AddTask: (state, action: PayloadAction<string>) => {
      const NewElement = { id: nanoid(), Text: action.payload }
      state.todo.push(NewElement)
      saveToLocalStorage(state.todo) // Save updated todo list to localStorage
    },
    RemoveTask: (state, action: PayloadAction<string>) => {
      state.todo = state.todo.filter((element) => element.id !== action.payload)
      saveToLocalStorage(state.todo) // Save updated todo list to localStorage
    },
  },
})
export const { AddTask, RemoveTask } = TodoSlice.actions
export const TodoReducer = TodoSlice.reducer
