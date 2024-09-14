import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NewElement, NewTask } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { nanoid } from '@reduxjs/toolkit'
import { ModalBodyProps } from '@/utils/TodoInterface'
import { RootState } from '@/utils/Redux/Store'
import { addElement } from '@/functions/Element/AddElement'
import { addTask } from '@/functions/Task/CreateTask'
const ModalBody: React.FC<ModalBodyProps> = ({
  onClose,
  onSubmitType,
  todoId,
}) => {
  console.log('IDDD', todoId)
  const User = useSelector((state: RootState) => state.UserReducer)
  const [title, setTitle] = useState<string>('') // State for the task or element title
  const dispatch = useDispatch()
  const handleAdd = async () => {
    console.log('Title:', title)
    console.log('On Submit Type:', onSubmitType)
    console.log('Todo ID:', typeof todoId)

    if (title.trim()) {
      if (onSubmitType === 'element') {
        const Payload = { id: nanoid(), text: title, userEmail: User.email }
        dispatch(NewElement(Payload)) // Dispatch the NewElement action
        const Data = await addElement(Payload.text, Payload.userEmail)
        if (Data) {
          console.log('New Element:', Data)
        }
      } else if (onSubmitType === 'task') {
        if (!todoId) {
          console.error('Task requires a valid todoId')
          return
        }
        const Data = await addTask(todoId, title)
        console.log('Data from addTask:', Data)
        dispatch(NewTask({ todoId, taskText: title }))
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
