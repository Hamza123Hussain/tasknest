'use client'
import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { useSelector } from 'react-redux'

const ShowTask = () => {
  // Typing useSelector to select the todo from the store
  const tasks = useSelector((state: RootState) => state.TodoReducer.todo)

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.Text}</div>
      ))}
    </div>
  )
}

export default ShowTask
