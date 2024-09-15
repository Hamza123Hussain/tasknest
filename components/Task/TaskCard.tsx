import { useDispatch } from 'react-redux'
import { FaCheckCircle, FaRegCircle, FaTrash } from 'react-icons/fa'
import { deleteTask } from '@/functions/Task/DeleteTask'
import {
  CompleteTask,
  RemoveATask,
} from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { AppDispatch } from '@/utils/Redux/Store'
import { Task } from '@/utils/TodoInterface'
import { updateTask } from '@/functions/Task/UpdateTask' // Import the update function
const TaskCard = ({ task, ID }: { task: Task; ID: string }) => {
  const dispatch = useDispatch<AppDispatch>()
  const handleDelete = async () => {
    dispatch(RemoveATask({ todoId: ID, taskID: task._id }))
    const response = await deleteTask(ID, task._id)
    if (response.message === 'Task deleted successfully') {
      alert('item gone')
    }
  }
  const handleComplete = async () => {
    const updatedStatus = !task.ISDone
    dispatch(CompleteTask({ todoId: ID, taskId: task._id }))
    const response = await updateTask(ID, task._id, updatedStatus)
    if (response.message === 'Task updated successfully') {
      alert('Task status updated')
    }
  }
  return (
    <div
      className={`bg-white text-gray-800 p-3 sm:p-4 flex flex-col mb-2 rounded-md border ${
        task.ISDone ? 'border-green-500 bg-blue-900' : 'border-[#007BFF]'
      } shadow-sm`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <span
          className={`flex-1 text-xs sm:text-base lg:text-lg ${
            task.ISDone ? 'line-through text-gray-500' : ''
          }`}
        >
          {task.Text}
        </span>
        <div className="flex justify-between items-center gap-3">
          {/* <button
            onClick={handleComplete}
            className="text-green-500 hover:text-green-600 ml-2"
            aria-label="Toggle Task Completion"
          >
            {task.ISDone ? <FaCheckCircle /> : <FaRegCircle />}
          </button> */}
          <FaTrash
            className="text-red-600 cursor-pointer hover:text-red-700"
            onClick={handleDelete}
            aria-label="Delete Task"
          />
        </div>
      </div>
    </div>
  )
}

export default TaskCard
