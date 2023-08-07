import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import { Container, Description, Title } from './styles'

interface PostCardProps {
  title: string
  publishedAt: Date
  description: string
  issueNumber: number
}

export const PostCard = ({
  title,
  publishedAt,
  description,
  issueNumber,
}: PostCardProps) => {
  const navigate = useNavigate()
  const formattedDateDistanceToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  })

  function handleClick() {
    navigate(`post/${issueNumber}`)
  }

  return (
    <Container onClick={handleClick}>
      <Title>
        <h1>{title}</h1>
        <span>{formattedDateDistanceToNow}</span>
      </Title>

      <Description>
        <div>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </Description>
    </Container>
  )
}
