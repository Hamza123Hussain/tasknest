import React from 'react'

const AddTask = () => {
  return (
    <div className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4">
      <h2 className="text-white font-bold text-2xl">Task Creater</h2>

      <div className="mt-4">
        <label className="text-white" title="title">
          Title
        </label>
        <input
          placeholder="Enter a title title your dream"
          className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
          type="text"
        />
      </div>

      <div className="mt-4 flex justify-end">
        <button
          className="bg-teal-500 text-white rounded-md px-4 py-1 hover:bg-teal-600 hover:text-white"
          id="generate-button"
          type="button"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default AddTask
