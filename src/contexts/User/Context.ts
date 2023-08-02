import { createContext } from 'react'

export interface User {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  login: string
  name: string
}

interface UserContextType {
  user: User
}

export const UserContext = createContext({} as UserContextType)
