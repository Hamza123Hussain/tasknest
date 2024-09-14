'use client'
import React, { useState } from 'react'
import TaskModal from './TaskModal'

const TaskCreater = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 rounded-md bg-[#007BFF] text-white hover:bg-[#0056b3]"
      >
        Create Task
      </button>

      <TaskModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
export default TaskCreater
