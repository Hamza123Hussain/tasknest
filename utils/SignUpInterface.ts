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
