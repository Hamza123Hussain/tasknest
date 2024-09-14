import { ApiUrl } from '@/utils/SignUpInterface'
import axios from 'axios'

export const addTask = async (elementId: string, text: string) => {
  try {
    const response = await axios.post(`${ApiUrl}api/Task/MakeTask`, {
      elementId, // The ID of the element you want to add the task to
      text, // The text of the task
    })
    console.log('Task added:', response.data)
    return response.data
  } catch (error) {
    console.error('Error adding task:', error)
    throw error
  }
}
