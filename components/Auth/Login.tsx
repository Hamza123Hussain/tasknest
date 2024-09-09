// pages/login.tsx
import { inputFields } from '@/utils/InputfieldArray'
import { useState, FormEvent } from 'react'
import InputField from './inputfield'
import SubmitButton from './submitbtn'
export default function Login() {
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const SliceInptuField = inputFields.slice(1, 3)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add login functionality here
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F9FA]">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#007BFF]">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {SliceInptuField.map(({ id, type, label }) => (
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
          <SubmitButton text="Login" />
          <div className="mt-4 text-right">
            <a href="/reset" className="text-[#007BFF] hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="mt-4 text-center text-black">
            <p>
              {`Don't`} have an account?{' '}
              <a href="/signup" className="text-[#007BFF] hover:underline">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
