import { AppDispatch, RootState } from '@/utils/Redux/Store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainCard from './MainCard'
import { fetchUserElements } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'

const ShowTask = () => {
  const todos = useSelector((state: RootState) => state.TodoReducer.todo)
  const User = useSelector((state: RootState) => state.UserReducer)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (User.email) {
      dispatch(fetchUserElements(User.email)) // Fetch user elements when component mounts
    }
  }, [dispatch, User.email])

  return (
    <div className="my-5">
      <h2 className="text-[#007BFF] text-5xl font-bold mb-3">Task List</h2>
      <div className="p-4 flex flex-col gap-5 w-[70vw] mx-auto rounded-lg shadow-lg">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-lg text-center my-10 ">
            No tasks available. Please add a new task to get started!
          </p>
        ) : (
          todos.map((todo) => <MainCard todo={todo} key={todo._id} />)
        )}
      </div>
    </div>
  )
}

export default ShowTask
