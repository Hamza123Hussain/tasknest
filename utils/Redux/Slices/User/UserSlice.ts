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
      if (state) {
        console.log(state)
        state._id = action.payload._id
        state.name = action.payload.name
        state.createdAt = action.payload.createdAt
        state.email = action.payload.email
        state.imageUrl = action.payload.imageUrl

        // Save updated state to local storage
        saveToLocalStorage(state)
      }
    },
    clearUserData: (state) => {
      if (state) {
        // Reset state to the initial empty values
        state._id = initialState._id
        state.name = initialState.name
        state.createdAt = initialState.createdAt
        state.email = initialState.email
        state.imageUrl = initialState.imageUrl
      }

      // Clear local storage
      localStorage.removeItem('UserData')
    },
  },
})

export const { UserMade, clearUserData } = UserSlice.actions
export const UserReducer = UserSlice.reducer
