import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#080303] text-[#343A40] p-6 mt-12 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 TaskNest. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="#privacy" className="hover:text-[#28A745]">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-[#28A745]">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
