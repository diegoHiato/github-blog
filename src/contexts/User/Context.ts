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

export interface Post {
  title: string
  body: string
  created_at: string
}

interface UserContextType {
  user: User
  posts: Post[]
}

export const UserContext = createContext({} as UserContextType)
