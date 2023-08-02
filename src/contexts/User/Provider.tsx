import { ReactNode, useCallback, useEffect, useState } from 'react'
import { githubApi } from '../../services/githubApi'
import { User, UserContext } from './context'

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({
    avatar_url: '',
    bio: '',
    company: '',
    followers: 0,
    html_url: '',
    login: '',
    name: '',
  })

  const getUserInformationFromApi = useCallback(async () => {
    await githubApi
      .request(`GET /users/${import.meta.env.VITE_GITHUB_USER}`)
      .then(({ data }) => {
        setUser(data)
      })
  }, [])

  useEffect(() => {
    getUserInformationFromApi()
  }, [getUserInformationFromApi])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}
