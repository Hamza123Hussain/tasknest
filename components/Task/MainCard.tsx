import { RemoveElement } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { Task, Todo } from '@/utils/TodoInterface'
import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import TaskCard from './TaskCard'
import TaskModal from './TaskModal'
const MainCard = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div key={todo.id} className=" bg-white p-4 rounded-lg ">
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
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 rounded-md bg-[#007BFF] text-white hover:bg-[#0056b3]"
        >
          Create New Task
        </button>
        <TaskModal
          ID={todo.id}
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          Name="Create New Task"
          onSubmitType="task"
        />
      </div>
    </div>
  )
}
export default MainCard
