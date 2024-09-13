import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'

// Define the type for each Todo item
interface Todo {
  id: string
  Text: string
}

// Define the state type
interface TodoState {
  todo: Todo[]
}

// Define the initial state with type
const initialState: TodoState = {
  todo: [{ id: nanoid(), Text: 'MY NAME IS HAMZA' }],
}

export const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState,
  reducers: {
    AddTask: (state, action: PayloadAction<string>) => {
      const NewElement = { id: nanoid(), Text: action.payload }
      state.todo.push(NewElement)
    },
    RemoveTask: (state, action: PayloadAction<string>) => {
      state.todo = state.todo.filter((element) => element.id !== action.payload)
    },
  },
})

export const { AddTask, RemoveTask } = TodoSlice.actions
export const TodoReducer = TodoSlice.reducer
