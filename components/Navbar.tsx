// components/Navbar.tsx
import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import ShowUser from './ShowUser'
const Navbar: React.FC = () => {
  const User = useSelector((state: RootState) => state.UserReducer)
  const router = useRouter()
  const handleLoginClick = () => {
    router.push('/login')
  }
  return (
    <nav className="bg-[#007BFF] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          TaskNest
        </a>
        <ul className="flex space-x-6 items-center">
          {User._id ? (
            <ShowUser />
          ) : (
            <li>
              <button
                onClick={handleLoginClick}
                className="bg-[#FFC107] text-dark-gray px-4 py-2 rounded hover:bg-[#e0a800]"
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
