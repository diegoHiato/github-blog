import { ReactNode, useEffect, useState } from 'react'
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

  const getUserInformationFromApi = async () => {
    await githubApi
      .get<User>('/users/diegoHiato')
      .then(({ data }) => setUser(data))
  }

  const fetchPosts = async () => {
    await githubApi
      .get<FetchPostsResponse>('/search/issues', {
        params: {
          q: 'repo:diegoHiato/github-blog',
        },
      })
      .then(({ data: { items } }) => setPosts(items))
  }

  useEffect(() => {
    getUserInformationFromApi()
    fetchPosts()
  }, [])

  return (
    <UserContext.Provider value={{ user, posts }}>
      {children}
    </UserContext.Provider>
  )
}
