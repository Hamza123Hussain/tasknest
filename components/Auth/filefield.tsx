// components/FileUpload.tsx
import React from 'react'

interface FileUploadProps {
  id: string
  file: File | null
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FileUpload: React.FC<FileUploadProps> = ({ id, file, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-sm font-medium text-dark-gray">
        Profile Image
      </label>
      <div className="relative">
        <input
          type="file"
          id={id}
          onChange={onChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <button
          type="button"
          className="w-full py-2 px-4 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] flex items-center justify-center"
        >
          {file ? file.name : 'Choose File'}
        </button>
      </div>
    </div>
  )
}

export default FileUpload
