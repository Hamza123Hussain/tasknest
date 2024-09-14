import { ApiUrl } from '@/utils/SignUpInterface'
import axios from 'axios'
export const updateTask = async (
  elementId: string,
  taskId: string,
  Isdone: boolean
) => {
  try {
    const response = await axios.patch(
      ` ${ApiUrl}api/Task/UpdateTask`,
      { Isdone },
      {
        params: { elementId, taskId },
      }
    )
    console.log('Task updated:', response.data)
    return response.data // Return the updated task or element data
  } catch (error) {
    console.error('Error updating task:', error)
    throw error // Rethrow error for further handling
  }
}
