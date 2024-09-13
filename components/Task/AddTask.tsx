'use client'

import { AddTask } from '@/utils/Redux/Slices/TodoSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const TaskCreater = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(AddTask(title))
      setTitle('') // Clear the input field after adding the task
    }
  }

  return (
    <div className="mt-4 flex flex-col bg-[#007BFF] rounded-lg p-4 shadow-lg">
      <h2 className="text-white font-bold text-2xl">Create New Task</h2>

      <div className="mt-4">
        <label className="text-white" htmlFor="title">
          Title
        </label>
        <input
          value={title}
          placeholder="Enter a title"
          className="w-full bg-[#F8F9FA] rounded-md my-2 border border-[#0056b3] text-gray-800 px-2 py-1"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={handleAddTask}
          className="bg-teal-500 text-white rounded-md px-4 py-1 hover:bg-teal-600"
          type="button"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default TaskCreater
