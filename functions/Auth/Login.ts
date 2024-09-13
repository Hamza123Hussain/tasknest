import { ApiUrl, SignUpResponse } from '@/utils/SignUpInterface'
import axios from 'axios'

export const login = async (
  email: string,
  password: string
): Promise<SignUpResponse | void> => {
  try {
    const response = await axios.post<SignUpResponse>(
      `${ApiUrl}api/Auth/Login`,
      { email, password }
    )

    if (response.status === 200) {
      //   console.log('User logged in successfully:', response.data)
      return response.data
    }
  } catch (error) {
    // Ensure proper error handling
    if (axios.isAxiosError(error)) {
      console.error('Axios error during login:', error.message)
    } else {
      console.error('Unexpected error during login:', (error as Error).message)
    }
  }
}
