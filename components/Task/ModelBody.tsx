import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NewElement, NewTask } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { ModalBodyProps } from '@/utils/TodoInterface'
import { RootState } from '@/utils/Redux/Store'
import { addElement } from '@/functions/Element/AddElement'
import { addTask } from '@/functions/Task/CreateTask'
const ModalBody: React.FC<ModalBodyProps> = ({
  onClose,
  onSubmitType,
  todoId,
}) => {
  const User = useSelector((state: RootState) => state.UserReducer)
  const [title, setTitle] = useState<string>('') // State for the task or element title
  const dispatch = useDispatch()
  const handleAdd = async () => {
    if (title.trim()) {
      try {
        if (onSubmitType === 'element') {
          // Create the element in the backend
          const Data = await addElement(title, User.email)

          // Ensure the backend returns the element with an ID
          if (Data && Data._id) {
            const Payload = { id: Data._id, text: title, userEmail: User.email }
            // Dispatch the element with the correct ID from the backend
            dispatch(NewElement(Payload))
            console.log('New Element created with ID:', Data._id)
          }
        } else if (onSubmitType === 'task') {
          if (!todoId) {
            console.error('Task requires a valid todoId')
            return
          }
          // Create the task in the backend
          const taskData = await addTask(todoId, title)

          // Dispatch the new task to the Redux store
          if (taskData) {
            dispatch(NewTask({ todoId, taskText: title }))
            console.log('New Task added to todoId:', todoId)
          }
        }
        setTitle('') // Clear the input field
        onClose() // Close the modal
      } catch (error) {
        console.error('Error adding element/task:', error)
      }
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
