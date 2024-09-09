import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#007BFF] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          TaskNest
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#features" className="hover:text-[#28A745]">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#28A745]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#28A745]">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#login"
              className="bg-[#FFC107] text-dark-gray px-4 py-2 rounded hover:bg-[#e0a800]"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
