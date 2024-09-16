import { AppDispatch, RootState } from '@/utils/Redux/Store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainCard from './MainCard'
import { fetchUserElements } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import Loader from '../Loader'

const ShowTask = () => {
  const [loading, setloading] = useState(true)
  const todos = useSelector((state: RootState) => state.TodoReducer.todo)
  const User = useSelector((state: RootState) => state.UserReducer)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    setloading(true)
    if (User?.email) {
      dispatch(fetchUserElements(User.email)) // Fetch user elements when component mounts
      setloading(false)
    }
  }, [dispatch, User?.email])
  if (loading) {
    return <Loader />
  }

  return (
    <div className="my-5">
      <h2 className="text-[#007BFF] text-5xl font-bold mb-3">Task List</h2>
      <div className="p-4 flex flex-col gap-5 w-[70vw] mx-auto rounded-lg shadow-lg">
        {todos.length < 1 ? (
          <p className="text-gray-500 text-lg text-center my-10 ">
            No tasks available. Please add a new task to get started!
          </p>
        ) : (
          todos.map((todo) => <MainCard key={todo._id} todo={todo} />)
        )}
      </div>
    </div>
  )
}

export default ShowTask
