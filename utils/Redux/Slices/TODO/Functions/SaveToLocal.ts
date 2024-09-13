import { Todo } from '@/utils/TodoInterface'

// Helper function to save todos to localStorage
export const saveToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}
