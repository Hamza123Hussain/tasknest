// Define the type for each Todo item
export interface Todo {
  _id: string
  Text: string
  Tasks: Task[]
  CreatedAt: Date
}

// Define the state type
export interface TodoState {
  todo: Todo[]
}

export interface Task {
  _id: string
  Text: string
  ISDone: boolean
  CreatedAt: string
}

export interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  Name: string
  onSubmitType: string
  ID?: string
}

export interface ModalBodyProps {
  onClose: () => void // Function to close the modal
  onSubmitType: string // Prop to determine which function to call
  todoId?: string // Optional todoId for adding a task
}
