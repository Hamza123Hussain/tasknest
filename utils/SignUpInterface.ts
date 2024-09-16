export interface SignUpResponse {
  _id: string
  name: string
  email: string
  imageUrl: string
}
export const ApiUrl = `https://task-nest-backend-umber.vercel.app/`

export interface formvalues {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface UserData {
  createdAt: string | null
  email: string | null
  imageUrl: string | null
  name: string | null
  _id: string | null
}
