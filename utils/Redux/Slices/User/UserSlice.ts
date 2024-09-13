import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  createdAt: '',
  email: '',
  imageUrl: '',
  name: '',
  _id: '',
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    UserData: (state, action) => {
      ;(state._id = action.payload._id),
        (state.name = action.payload.name),
        (state.createdAt = action.payload.createdAt),
        (state.email = action.payload.email),
        (state.imageUrl = action.payload.imageUrl)
    },
  },
})

export const { UserData } = UserSlice.actions
export const UserReducer = UserSlice.reducer
