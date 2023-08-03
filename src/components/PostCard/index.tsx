import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import { Container, Description, Title } from './styles'

interface PostCardProps {
  title: string
  publishedAt: Date
  description: string
}

export const PostCard = ({
  title,
  publishedAt,
  description,
}: PostCardProps) => {
  const formattedDateDistanceToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Container>
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
