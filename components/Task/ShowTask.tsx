'use client'
import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { useSelector } from 'react-redux'

const ShowTask = () => {
  // Typing useSelector to select the todo from the store
  const tasks = useSelector((state: RootState) => state.TodoReducer.todo)

  return (
    <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
      <h2 className="text-[#007BFF] text-2xl font-bold mb-4">Tasks</h2>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white text-gray-800 p-3 my-2 rounded-md border border-[#007BFF] shadow-sm"
        >
          {task.Text}
        </div>
      ))}
    </div>
  )
}

export default ShowTask
