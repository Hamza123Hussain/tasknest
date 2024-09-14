import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NewElement, NewTask } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'

interface ModalBodyProps {
  onClose: () => void // Function to close the modal
  onSubmitType: string // Prop to determine which function to call
  todoId?: string // Optional todoId for adding a task
}

const ModalBody: React.FC<ModalBodyProps> = ({
  onClose,
  onSubmitType,
  todoId,
}) => {
  const [title, setTitle] = useState<string>('') // State for the task or element title
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (title.trim()) {
      if (onSubmitType === 'element') {
        dispatch(NewElement(title)) // Dispatch the NewElement action
      } else if (onSubmitType === 'task' && todoId) {
        dispatch(NewTask({ todoId, taskText: title })) // Dispatch the NewTask action
      }
      setTitle('') // Clear the input field
      onClose() // Close the modal
    }
  }

  return (
    <>
      <div className="mb-4">
        <label className="block text-black font-medium mb-2" htmlFor="title">
          {onSubmitType === 'element' ? 'New Element Title' : 'New Task Title'}
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-white focus:border-white"
          placeholder={
            onSubmitType === 'element'
              ? 'Enter element title'
              : 'Enter task title'
          }
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
          onClick={handleAdd}
          className="px-4 py-2 rounded-md bg-[#007BFF] text-white hover:bg-[#19334f]"
        >
          {onSubmitType === 'element' ? 'Add Element' : 'Add Task'}
        </button>
      </div>
    </>
  )
}

export default ModalBody
