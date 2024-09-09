// components/InputField.tsx
import React from 'react'

interface InputFieldProps {
  id: string
  type: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  label,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="mb-4 text-black">
      <label htmlFor={id} className="block text-sm font-medium text-dark-gray">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#007BFF]"
        required={required}
      />
    </div>
  )
}

export default InputField
