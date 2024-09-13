import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const User = useSelector((state: RootState) => state.UserReducer)
  return (
    <nav className="bg-[#007BFF] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          TaskNest
        </a>
        <ul className="flex space-x-6">
          <li>
            <a
              href="/login"
              className="bg-[#FFC107] text-dark-gray px-4 py-2 rounded hover:bg-[#e0a800]"
            >
              {User.name}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
