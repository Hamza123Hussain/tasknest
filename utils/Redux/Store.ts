import { configureStore } from '@reduxjs/toolkit'

// Define your slices or reducers here
// import someReducer from './someSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    // some: someReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {some: SomeStateType}
export type AppDispatch = typeof store.dispatch
