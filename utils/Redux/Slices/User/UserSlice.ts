import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '@/utils/SignUpInterface'
import { loadFromLocalStorage, saveToLocalStorage } from './LocalStorage'
const initialState: UserData = {
  createdAt: '',
  email: '',
  imageUrl: '',
  name: '',
  _id: '',
}
// Initialize state from local storage
const initialStateFromLocalStorage = loadFromLocalStorage()
export const UserSlice = createSlice({
  name: 'User',
  initialState: initialStateFromLocalStorage,
  reducers: {
    UserMade: (state, action) => {
      state._id = action.payload._id
      state.name = action.payload.name
      state.createdAt = action.payload.createdAt
      state.email = action.payload.email
      state.imageUrl = action.payload.imageUrl

      // Save updated state to local storage
      saveToLocalStorage(state)
    },
    clearUserData: (state) => {
      // Clear state
      Object.assign(state, initialState)
      // Clear local storage
      localStorage.removeItem('UserData')
    },
  },
})

export const { UserMade, clearUserData } = UserSlice.actions
export const UserReducer = UserSlice.reducer
