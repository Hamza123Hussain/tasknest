import {
  NewTask,
  RemoveElement,
} from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { Task, Todo } from '@/utils/TodoInterface'
import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import TaskCard from './TaskCard'
const MainCard = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch()
  const createTask = (todoId: string) => {
    dispatch(NewTask({ todoId, taskText }))
    setTaskText('') // Clear input field after task creation
  }
  const [taskText, setTaskText] = useState('')
  return (
    <div key={todo.id} className="mb-6">
      <div className=" flex items-center justify-between">
        <h1 className="text-[#007BFF] text-4xl font-semibold mb-2">
          {todo.Text}
        </h1>
        <FaRegTrashAlt
          className="text-red-700 cursor-pointer hover:text-red-800"
          onClick={() => dispatch(RemoveElement(todo.id))}
          aria-label="Remove Todo"
        />
      </div>
      {todo.Tasks?.map((task: Task) => (
        <TaskCard task={task} key={task.ID} ID={todo.id} />
      ))}
      <div className="relative mt-6">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="New Task"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            onClick={() => createTask(todo.id)}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
export default MainCard
