import { RootState } from '@/utils/Redux/Store'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const ShowUser = () => {
  const User = useSelector((state: RootState) => state.UserReducer)
  return (
    <div className=" flex items-center gap-2  ">
      <li className="flex items-center space-x-2  bg-[#FFC107] hover:bg-[#e0a800] rounded-lg px-2 ">
        {User.imageUrl && (
          <Image
            src={User.imageUrl}
            alt={User.name}
            width={30}
            height={40}
            className="rounded-full"
          />
        )}
        <span className=" text-dark-gray px-4 py-2 rounded ">{User.name}</span>
      </li>
      <button className=" bg-red-600 text-black rounded-lg p-1 px-6">
        Sign Out
      </button>
    </div>
  )
}

export default ShowUser
