import { UserData } from '@/utils/SignUpInterface'

export const loadFromLocalStorage = (): UserData | null => {
  if (typeof window !== 'undefined') {
    // Make sure the code only runs on the client-side
    const userData = localStorage.getItem('UserData')
    return userData ? JSON.parse(userData) : null
  }
  return null
}

// Function to save user data to local storage
export const saveToLocalStorage = (user: UserData) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('UserData', JSON.stringify(user))
  }
}
