'use client'
import { RemoveElement } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
const ShowTask = () => {
  // Typing useSelector to select the todo from the store
  const tasks = useSelector((state: RootState) => state.TodoReducer.todo)
  const Dispatch = useDispatch()
  return (
    <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
      <h2 className="text-[#007BFF] text-2xl font-bold mb-4">Tasks</h2>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white text-gray-800 p-3 flex items-center justify-between my-2 rounded-md border border-[#007BFF] shadow-sm"
        >
          <span> {task.Text}</span>
          <FaRegTrashAlt
            className=" text-red-700 cursor-pointer"
            onClick={() => Dispatch(RemoveElement(task.id))}
          />
        </div>
      ))}
    </div>
  )
}
export default ShowTask
