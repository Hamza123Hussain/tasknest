// Define the type for each Todo item
export interface Todo {
  id: string
  Text: string
}

// Define the state type
export interface TodoState {
  todo: Todo[]
}
