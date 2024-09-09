// components/SubmitButton.tsx
import React from 'react'

interface SubmitButtonProps {
  text: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full py-2 px-4 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3]"
    >
      {text}
    </button>
  )
}

export default SubmitButton
