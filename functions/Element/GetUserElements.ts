import { ApiUrl } from '@/utils/SignUpInterface'
import axios from 'axios'

export const getAllUserElements = async (userEmail: string) => {
  try {
    const response = await axios.get(`${ApiUrl}api/Element/GetUserElements`, {
      params: { UserEmail: userEmail },
    })
    console.log('User elements:', response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching user elements:', error)
    throw error
  }
}
