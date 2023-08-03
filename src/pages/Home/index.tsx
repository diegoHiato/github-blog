import { zodResolver } from '@hookform/resolvers/zod'
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
  const { user } = useUser()
  const { register, handleSubmit } = useForm<SearchForm>({
    resolver: zodResolver(searchFormSchema),
  })

  return (
    <Container>
      <UserProfileCard user={user} />

      <Content>
        <section>
          <div>
            <h2>{'Publicações'}</h2>
            <span>{'6 publicações'}</span>
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
          <PostCard />
        </section>
      </Content>
    </Container>
  )
}
