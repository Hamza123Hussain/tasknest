// pages/reset.js
import { FormEvent, useState } from 'react'
import SubmitButton from './submitbtn'
export default function ResetPassword() {
  const [email, setEmail] = useState('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add password reset functionality here
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F9FA]">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#007BFF]">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 text-black">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-dark-gray"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#007BFF]"
              required
            />
          </div>
          <SubmitButton text="Reset Password" />
          <div className="mt-4 text-center text-black">
            <p>
              Remembered your password?{' '}
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
