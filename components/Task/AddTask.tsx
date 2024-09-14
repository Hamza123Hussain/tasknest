'use client'
import React, { useState } from 'react'
import TaskModal from './TaskModal'
const TaskCreater = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 rounded-md w-48 bg-[#007BFF] text-white hover:bg-[#0056b3]"
      >
        Create Element
      </button>
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        Name="Create New Element"
        onSubmitType="element"
      />
    </>
  )
}
export default TaskCreater
