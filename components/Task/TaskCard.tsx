import { CompleteTask } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { Task } from '@/utils/TodoInterface'
import React from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const TaskCard = ({ task, ID }: { task: Task; ID: string }) => {
  const dispatch = useDispatch()
  return (
    <div
      key={task.ID}
      className={`bg-white text-gray-800 p-3 flex flex-col mb-2 rounded-md border ${
        task.ISDone ? 'border-green-500 bg-green-950' : 'border-[#007BFF]'
      } shadow-sm`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`flex-1 ${
            task.ISDone ? 'line-through text-gray-500' : ''
          }`}
        >
          {task.Text}
        </span>
        <button
          onClick={() =>
            dispatch(CompleteTask({ todoId: ID, taskId: task.ID }))
          }
          className="text-green-500 hover:text-green-600 ml-2"
          aria-label="Toggle Task Completion"
        >
          {task.ISDone ? <FaCheckCircle /> : <FaRegCircle />}
        </button>
      </div>
      <div className="text-gray-600 text-sm mt-2">
        <p>Created At: {new Date(task.CreatedAt).toLocaleString()}</p>
      </div>
      <div className="flex justify-end mt-2"></div>
    </div>
  )
}
export default TaskCard
