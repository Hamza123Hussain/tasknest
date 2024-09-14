// Define the type for each Todo item
export interface Todo {
  id: string
  Text: string
  Tasks: Task[]
  CreatedAt: Date
}

// Define the state type
export interface TodoState {
  todo: Todo[]
}

export interface Task {
  ID: string
  Text: string
  ISDone: boolean
  CreatedAt: Date
}

export interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  Name: string
  onSubmitType: string
  ID?: string
}
