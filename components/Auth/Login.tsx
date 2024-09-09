// pages/login.tsx
import { useState, FormEvent } from 'react'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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
          <div className="mb-4">
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
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-dark-gray"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#007BFF]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3]"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <a href="/reset" className="text-[#007BFF] hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="mt-4 text-center">
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
