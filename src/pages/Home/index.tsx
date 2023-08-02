import { UserProfileCard } from '../../components/UserProfileCard'
import { useUser } from '../../contexts/Hooks/useUser'

export const Home = () => {
  const { user } = useUser()

  return (
    <main>
      <UserProfileCard user={user} />
    </main>
  )
}
