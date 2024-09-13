'use client'
import {
  NewTask,
  RemoveElement,
} from '@/utils/Redux/Slices/TODO/Slice/TodoSlice'
import { RootState } from '@/utils/Redux/Store'
import { Task } from '@/utils/TodoInterface'
import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
const ShowTask = () => {
  const CreateTask = (todoId: string) => {
    Dispatch(NewTask({ todoId, taskText: TasKText }))
  }
  const Main = useSelector((state: RootState) => state.TodoReducer.todo)
  const Dispatch = useDispatch()
  const [TasKText, SetTaskText] = useState('')
  return (
    <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
      <h2 className="text-[#007BFF] text-2xl font-bold mb-4">Main</h2>
      {Main.map((task) => (
        <div
          key={task.id}
          className="bg-white text-gray-800 p-3 flex items-center justify-between my-2 rounded-md border border-[#007BFF] shadow-sm"
        >
          <span> {task.Text}</span>
          <FaRegTrashAlt
            className=" text-red-700 cursor-pointer"
            onClick={() => Dispatch(RemoveElement(task.id))}
          />

          <div className="relative mt-6">
            <input
              type="text"
              value={TasKText}
              onChange={(e) => SetTaskText(e.target.value)}
              placeholder="New Task"
              className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
            />
            <div className="absolute inset-y-1 right-1 flex justify-end">
              <button
                onClick={() => {
                  CreateTask(task.id)
                }}
                className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
              >
                <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {task.Tasks?.map((element: Task) => (
            <div key={element.ID}>h1</div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default ShowTask
