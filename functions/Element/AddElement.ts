import { ApiUrl } from '@/utils/SignUpInterface'
import axios from 'axios'

export const addElement = async (text: string, userEmail: string) => {
  try {
    const response = await axios.post(`${ApiUrl}api/Element/MakeElement`, {
      Text: text,
      UserEmail: userEmail,
    })
    console.log('Element added:', response.data)
    return response.data
  } catch (error) {
    console.error('Error adding element:', error)
    throw error
  }
}
