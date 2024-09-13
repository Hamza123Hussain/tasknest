import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = { todo: [{ id: nanoid(), Text: 'MY NAME IS HAMZA' }] }

export const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState,
  reducers: {
    AddTask: (state, action) => {
      const NewElement = { id: nanoid(), Text: action.payload }
      state.todo.push(NewElement)
    },
    RemoveTask: (state, action) => {
      state.todo = state.todo.filter((element) => {
        element.id !== action.payload
      })
    },
  },
})

export const { AddTask, RemoveTask } = TodoSlice.actions
export const TodoReducer = TodoSlice.reducer
