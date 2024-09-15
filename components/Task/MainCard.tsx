import { RemoveElement } from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { Task, Todo } from '@/utils/TodoInterface'
import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import TaskCard from './TaskCard'
import TaskModal from './TaskModal'
import { deleteElement } from '@/functions/Element/DeleteElement'
const MainCard = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  const Deleteme = async () => {
    dispatch(RemoveElement(todo._id))
    const Data = await deleteElement(todo._id)
    if (Data) alert('Item gone')
  }
  return (
    <div className=" bg-white p-4 rounded-lg ">
      <div className=" flex items-center justify-between">
        <h1 className="text-[#007BFF] text-4xl font-semibold mb-2">
          {todo.Text}
        </h1>

        <FaRegTrashAlt
          className="text-red-700 cursor-pointer hover:text-red-800"
          aria-label="Remove Todo"
          onClick={Deleteme}
        />
      </div>
      {todo.Tasks?.map((task: Task, index) => (
        <TaskCard task={task} key={index} ID={todo._id} />
      ))}
      <div className="relative mt-6">
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 rounded-md bg-[#007BFF] text-white hover:bg-[#0056b3]"
        >
          Create New Task
        </button>
        <TaskModal
          ID={todo._id}
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
