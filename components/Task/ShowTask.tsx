import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import MainCard from './MainCard'

const ShowTask = () => {
  const todos = useSelector((state: RootState) => state.TodoReducer.todo)

  return (
    <div className="my-5">
      <h2 className="text-[#007BFF] text-5xl font-bold mb-3">Task List</h2>
      <div className="p-4 flex flex-col gap-5 w-[70vw] mx-auto rounded-lg shadow-lg">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-lg text-center my-10 ">
            No tasks available. Please add a new task to get started!
          </p>
        ) : (
          todos.map((todo) => <MainCard todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  )
}

export default ShowTask
