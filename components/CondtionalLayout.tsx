// components/ConditionalLayout.tsx
import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePathname, useRouter } from 'next/navigation'
import { RootState } from '@/utils/Redux/Store'
const ConditionalLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const router = useRouter()
  const user = useSelector((state: RootState) => state.UserReducer)
  const isLoggedIn = !!user._id
  useEffect(() => {
    const authPages = ['/login', '/signup', '/reset']
    if (isLoggedIn) {
      if (authPages.includes(pathname)) {
        router.push('/') // Redirect to a logged-in page
      }
    } else {
      // If not logged in, redirect to login page if accessing protected pages
      if (!authPages.includes(pathname)) {
        router.push('/login') // Redirect to login page
      }
    }
  }, [isLoggedIn, pathname, router])

  return <>{children}</>
}
export default ConditionalLayout
