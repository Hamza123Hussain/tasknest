export interface SignUpResponse {
  _id: string
  name: string
  email: string
  imageUrl: string
}
export const ApiUrl = `http://localhost:8000/`

export interface formvalues {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface UserData {
  createdAt: string
  email: string
  imageUrl: string
  name: string
  _id: string
}
