import axios from 'axios'

export const deleteTask = async (elementId: string, taskId: string) => {
  try {
    const response = await axios.delete(
      `/api/task/delete/${elementId}/${taskId}`
    )
    console.log('Task deleted:', response.data)
    return response.data
  } catch (error) {
    console.error('Error deleting task:', error)
    throw error
  }
}
