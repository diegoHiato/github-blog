import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { PostCard } from '../../components/PostCard'
import { UserProfileCard } from '../../components/UserProfileCard'
import { useUser } from '../../contexts/Hooks/useUser'
import { Container, Content } from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchForm = zod.infer<typeof searchFormSchema>

export const Home = () => {
  const { user, posts, fetchPosts } = useUser()
  const { register, watch, handleSubmit } = useForm<SearchForm>({
    resolver: zodResolver(searchFormSchema),
  })
  const searchInputValue = watch('query')
  const filterredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchInputValue),
  )

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <Container>
      <UserProfileCard user={user} />

      <Content>
        <section>
          <div>
            <h2>{'Publicações'}</h2>
            <span>{`${filterredPosts.length} publicações`}</span>
          </div>

          <div>
            <form onSubmit={handleSubmit(() => {})}>
              <input
                type="text"
                placeholder="Buscar conteúdo"
                {...register('query')}
              />
            </form>
          </div>
        </section>

        <section>
          {filterredPosts.map((post) => {
            return (
              <PostCard
                key={post.title}
                title={post.title}
                description={post.body}
                issueNumber={post.number}
                publishedAt={new Date(post.created_at)}
              />
            )
          })}
        </section>
      </Content>
    </Container>
  )
}
