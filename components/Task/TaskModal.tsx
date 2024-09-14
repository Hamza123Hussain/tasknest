'use client'
import { TaskModalProps } from '@/utils/TodoInterface'
import ModalBody from './ModelBody'
const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  Name,
  onSubmitType,
  ID,
}) => {
  if (!isOpen) return null // Don't render the modal if it's not open
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-[#ffffff] rounded-lg shadow-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">{Name}</h2>
          <button
            className="text-black hover:text-gray-300 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ModalBody onClose={onClose} onSubmitType={onSubmitType} todoId={ID} />
      </div>
    </div>
  )
}
export default TaskModal
