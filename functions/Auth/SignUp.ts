import { ApiUrl, formvalues, SignUpResponse } from '@/utils/SignUpInterface'
import axios from 'axios'
export const signUp = async (
  formvalues: formvalues,
  file: File | null
): Promise<SignUpResponse | undefined> => {
  try {
    const formData = new FormData()
    formData.append('Name', formvalues.username)
    formData.append('email', formvalues.email)
    formData.append('password', formvalues.password)
    if (file) {
      formData.append('image', file)
    }
    const response = await axios.post<SignUpResponse>(
      `${ApiUrl}api/Auth/Register`,
      formData
    )
    if (response.status === 200) {
      console.log('User registered successfully:', response.data)
      return response.data // Handle success, return the user data
    } else {
      console.error('User registration failed:', response.data)
    }
  } catch (error) {
    if (error instanceof Error) {
      // General JS error handling
      console.error('Error during sign-up:', error.message)
    } else {
      console.error('Unexpected error during sign-up', error)
    }
  }
}
