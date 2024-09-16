import { signOut } from '@/functions/Auth/Signout'
import { clearUserData } from '@/utils/Redux/Slices/User/UserSlice'
import { RootState } from '@/utils/Redux/Store'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const ShowUser = () => {
  const User = useSelector((state: RootState) => state.UserReducer)
  const Dispatch = useDispatch()
  const Router = useRouter()
  const SignedOut = async () => {
    const Data = await signOut()
    if (Data) Router.push('/login')
    Dispatch(clearUserData())
  }
  return (
    <div className=" flex items-center gap-2 rounded-lg bg-[#FFC107] hover:bg-[#e0a800]  px-4 py-1   ">
      <li className="flex items-center space-x-1   ">
        {User?.imageUrl && (
          <Image
            src={User.imageUrl}
            alt={User.name}
            width={30}
            height={40}
            className="rounded-full"
          />
        )}
        <span className=" text-dark-gray px-4 py-2 rounded ">{User?.name}</span>
      </li>
      <button
        onClick={SignedOut}
        className=" bg-red-600 text-black rounded-lg p-1 px-6"
      >
        Sign Out
      </button>
    </div>
  )
}
export default ShowUser
