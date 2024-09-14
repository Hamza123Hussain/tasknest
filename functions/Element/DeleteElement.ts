import axios from 'axios'

export const deleteElement = async (elementId: string) => {
  try {
    const response = await axios.delete('/api/element/delete', {
      params: { id: elementId },
    })
    console.log('Element deleted:', response.data)
    return response.data
  } catch (error) {
    console.error('Error deleting element:', error)
    throw error
  }
}
