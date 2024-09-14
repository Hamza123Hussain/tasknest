import { NewElement } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
const ModalBody = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] = useState<string>('') // State for the task title
  const dispatch = useDispatch()
  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(NewElement(title)) // Dispatch the new task to Redux
      setTitle('') // Clear the input field
      onClose() // Close the modal after adding the task
    }
  }
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-black font-medium mb-2"
          htmlFor="taskTitle"
        >
          Task Title
        </label>
        <input
          id="taskTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-white focus:border-white"
          placeholder="Enter task title"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleAddTask}
          className="px-4 py-2 rounded-md bg-[#007BFF] text-white hover:bg-[#19334f]"
        >
          Add Task
        </button>
      </div>
    </>
  )
}
export default ModalBody
