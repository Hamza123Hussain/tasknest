// components/SignupForm.tsx
import { FormEvent, useState } from 'react'
import InputField from './inputfield'
import FileUpload from './filefield'
import SubmitButton from './submitbtn'
import { inputFields } from '@/utils/InputfieldArray'
export default function SignupForm() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [image, setImage] = useState<File | null>(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }))
  }
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add signup functionality here
    // Handle image upload and form submission
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F9FA]">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#007BFF]">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          {inputFields.map(({ id, type, label }) => (
            <InputField
              key={id}
              id={id}
              type={type}
              label={label}
              value={formValues[id as keyof typeof formValues]}
              onChange={handleChange}
              required
            />
          ))}
          <FileUpload id="image" file={image} onChange={handleImageChange} />
          <SubmitButton text="Sign Up" />
          <div className="mt-4 text-center text-black">
            <p>
              Already have an account?{' '}
              <a href="/login" className="text-[#007BFF] hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
