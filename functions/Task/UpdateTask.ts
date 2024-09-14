import axios from 'axios'

export const updateTask = async (
  elementId: string,
  taskId: string,
  ISDone: boolean
) => {
  try {
    const response = await axios.put(
      `/api/task/update/${elementId}/${taskId}`,
      {
        isDone: ISDone, // Updated task completion status
      }
    )
    console.log('Task updated:', response.data)
    return response.data
  } catch (error) {
    console.error('Error updating task:', error)
    throw error
  }
}
