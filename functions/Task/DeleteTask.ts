import { ApiUrl } from '@/utils/SignUpInterface'
import axios from 'axios'

export const deleteTask = async (elementId: string, taskId: string) => {
  try {
    // Send a DELETE request to the API to delete the task
    const response = await axios.delete(`${ApiUrl}api/Task/DeleteTask`, {
      params: { elementId, taskId },
    })
    console.log('Task deleted:', response.data)
    return response.data // Return the response data if needed
  } catch (error) {
    console.error('Error deleting task:', error)
    throw error // Rethrow the error for further handling
  }
}
