import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import MainCard from './MainCard'

const ShowTask = () => {
  const todos = useSelector((state: RootState) => state.TodoReducer.todo)
  return (
    <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
      <h2 className="text-[#007BFF] text-6xl font-bold mb-4">Tasks</h2>
      {todos.map((todo) => (
        <MainCard todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default ShowTask
