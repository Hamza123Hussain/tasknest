import { configureStore } from '@reduxjs/toolkit'
import { TodoReducer } from './Slices/TODO/Slice/TodoSlice'
import { UserReducer } from './Slices/User/UserSlice'

export const store = configureStore({
  reducer: {
    TodoReducer,
    UserReducer,
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {some: SomeStateType}
export type AppDispatch = typeof store.dispatch
