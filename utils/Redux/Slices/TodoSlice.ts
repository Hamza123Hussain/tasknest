import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = { todo: [] }

export const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState,
  reducers: {},
})
