import axios from 'axios'

export const addTask = async (elementId: string, task: string) => {
  try {
    const response = await axios.post('/api/task/add', {
      elementId: elementId,
      task: task, // task object should contain properties like ID, Text, ISDone, etc.
    })
    console.log('Task added:', response.data)
    return response.data
  } catch (error) {
    console.error('Error adding task:', error)
    throw error
  }
}
