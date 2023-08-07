import { ReactNode, useCallback, useEffect, useState } from 'react'
import { githubApi } from '../../services/githubApi'
import { Post, User, UserContext } from './Context'

interface FetchPostsResponse {
  incomplete_results: boolean
  items: Post[]
  total_count: number
}

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
  const [posts, setPosts] = useState<Post[]>([])

  const fetchUserInformation = async () => {
    await githubApi
      .get<User>(`users/${import.meta.env.VITE_GITHUB_USER}`)
      .then(({ data }) => setUser(data))
  }

  const fetchPosts = useCallback(async () => {
    await githubApi
      .get<FetchPostsResponse>('/search/issues', {
        params: {
          q: `repo:${import.meta.env.VITE_GITHUB_USER}/${
            import.meta.env.VITE_REPOSITORY
          }`,
        },
      })
      .then(({ data: { items } }) => setPosts(items))
  }, [])

  useEffect(() => {
    fetchUserInformation()
  }, [])

  return (
    <UserContext.Provider value={{ user, posts, fetchPosts }}>
      {children}
    </UserContext.Provider>
  )
}
