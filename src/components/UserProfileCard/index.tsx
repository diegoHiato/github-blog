import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { User } from '../../contexts/User/context'
import { Container, Footer, UserBio, UserProfileImage } from './styles'

interface UserProfileCardProps {
  user: User
}

export const UserProfileCard = ({ user }: UserProfileCardProps) => {
  return (
    <Container>
      <UserProfileImage $url={user.avatar_url} />

      <section>
        <UserBio>
          <div>
            <span>{user.name}</span>

            <NavLink to={user.html_url} target="_blank">
              <span>{'GITHUB'}</span>
              <FaArrowUpRightFromSquare />
            </NavLink>
          </div>

          <div>
            <p>{user.bio}</p>
          </div>
        </UserBio>

        <Footer>
          <div>
            <FaGithub />
            <span>{user.login}</span>
          </div>

          {user?.company && (
            <div>
              <FaBuilding />
              <span>{user.company}</span>
            </div>
          )}

          {user?.followers > 0 && (
            <div>
              <FaUserGroup />
              <span>{`${user.followers} ${
                user.followers > 1 ? 'seguidores' : 'seguidor'
              }`}</span>
            </div>
          )}
        </Footer>
      </section>
    </Container>
  )
}
