import { UserData } from '@/utils/SignUpInterface'

// Function to get user data from local storage
export const loadFromLocalStorage = (): UserData => {
  const userData = localStorage.getItem('UserData')
  return userData ? JSON.parse(userData) : {}
}

// Function to save user data to local storage
export const saveToLocalStorage = (user: UserData) => {
  localStorage.setItem('UserData', JSON.stringify(user))
}
