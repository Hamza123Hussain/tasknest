import { useDispatch } from 'react-redux'
import { FaCheckCircle, FaRegCircle, FaTrash } from 'react-icons/fa'
import { deleteTask } from '@/functions/Task/DeleteTask'
import {
  CompleteTask,
  RemoveATask,
} from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { AppDispatch } from '@/utils/Redux/Store'
import { Task } from '@/utils/TodoInterface'
const TaskCard = ({ task, ID }: { task: Task; ID: string }) => {
  console.log('Taskss : ', task._id)
  const dispatch = useDispatch<AppDispatch>()
  const handleDelete = async () => {
    dispatch(RemoveATask({ todoId: ID, taskID: task._id }))
    const response = await deleteTask(ID, task._id)
    if (response.message === 'Task deleted successfully') {
      alert('item gone')
    }
  }
  return (
    <div
      className={`bg-white text-gray-800 p-3 flex flex-col mb-2 rounded-md border ${
        task.ISDone ? 'border-green-500 bg-blue-900' : 'border-[#007BFF]'
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
        <div className=" flex justify-between items-center gap-3">
          <button
            onClick={() =>
              dispatch(CompleteTask({ todoId: ID, taskId: task._id }))
            }
            className="text-green-500 hover:text-green-600 ml-2"
            aria-label="Toggle Task Completion"
          >
            {task.ISDone ? <FaCheckCircle /> : <FaRegCircle />}
          </button>
          <FaTrash
            className="text-red-600 cursor-pointer"
            onClick={handleDelete}
            aria-label="Delete Task"
          />
        </div>
      </div>
      <div className="text-gray-600 text-sm mt-2">
        <p>Created At: {new Date(task.CreatedAt).toLocaleString()}</p>
      </div>
    </div>
  )
}
export default TaskCard
