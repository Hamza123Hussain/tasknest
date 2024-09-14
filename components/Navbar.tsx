// components/Navbar.tsx
import { RootState } from '@/utils/Redux/Store'
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import ShowUser from './Auth/ShowUser'
import Image from 'next/image'
import Logo from '../public/Logo.png'
const Navbar: React.FC = () => {
  const User = useSelector((state: RootState) => state.UserReducer)
  const router = useRouter()
  const handleLoginClick = () => {
    router.push('/login')
  }
  return (
    <nav className="bg-[#007BFF] text-white py-1">
      <div className=" px-2 mx-auto flex justify-between items-center sm:flex-row flex-col gap-5">
        <a href="/" className="text-2xl font-bold flex items-center gap-2">
          <Image
            className=" rounded-full bg-transparent"
            src={Logo}
            alt="Log"
            width={25}
            height={20}
          />
          <span>TaskNest</span>
        </a>
        <ul className="flex space-x-6 items-center">
          {User._id ? (
            <ShowUser />
          ) : (
            <button
              onClick={handleLoginClick}
              className="bg-[#FFC107] text-dark-gray px-4 py-2 rounded hover:bg-[#e0a800]"
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
