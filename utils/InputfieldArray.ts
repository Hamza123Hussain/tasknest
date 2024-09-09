interface InputProps {
  id: string
  type: string
  label: string
}

export const inputFields: InputProps[] = [
  { id: 'username', type: 'text', label: 'Username' },
  { id: 'email', type: 'email', label: 'Email' },
  { id: 'password', type: 'password', label: 'Password' },
  { id: 'confirm-password', type: 'password', label: 'Confirm Password' },
]
