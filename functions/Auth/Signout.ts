// utils/api.ts
import { ApiUrl } from '@/utils/SignUpInterface'
import axios from 'axios'
export const signOut = async () => {
  try {
    const response = await axios.get<boolean>(`${ApiUrl}api/Auth/Signout`)
    if (response.status === 200) {
      return true
      // Handle success, such as redirecting to the login page
      window.location.href = '/login' // Redirect to login page after sign-out
    }
  } catch (error) {
    console.error(
      'Error during sign-out:',
      (error as Error).message || 'Unexpected error'
    )
    // Handle error, such as showing an error message
  }
}
