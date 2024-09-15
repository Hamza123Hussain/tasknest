import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { TodoState } from '@/utils/TodoInterface'
import { getAllUserElements } from '@/functions/Element/GetUserElements'
import { AddTodo } from '../Functions/AddElement'
import { AddTaskToTodo } from '../Functions/AddNewTask'
import { ToggleTaskCompletion } from '../Functions/CompleteTask'
import { RemoveTask } from '../Functions/RemoveATask'
import { RemoveTodo } from '../Functions/RemoveTask'
// Async action to fetch user elements from the API
export const fetchUserElements = createAsyncThunk(
  'todo/fetchUserElements',
  async (userEmail: string, { rejectWithValue }) => {
    try {
      const data = await getAllUserElements(userEmail)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
const initialState: TodoState = {
  todo: [], // Initial state is empty until we fetch data from the API
}
export const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState,
  reducers: {
    NewElement: AddTodo,
    NewTask: AddTaskToTodo,
    CompleteTask: ToggleTaskCompletion,
    RemoveElement: RemoveTodo,
    RemoveATask: RemoveTask,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserElements.fulfilled, (state, action) => {
      state.todo = action.payload // Update state with API data
    })
    builder.addCase(fetchUserElements.rejected, (state, action) => {
      console.error('Error fetching elements:', action.payload)
    })
  },
})

export const { NewElement, NewTask, CompleteTask, RemoveElement, RemoveATask } =
  TodoSlice.actions

export const TodoReducer = TodoSlice.reducer
