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
      return response.data // Return user data if login is successful
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific error
      console.error(
        'Axios error during login:',
        error.response?.data.message || error.message
      )
    } else {
      // Handle other types of errors (just in case)
      console.error('Unexpected error during login:', (error as Error).message)
    }
  }
}
