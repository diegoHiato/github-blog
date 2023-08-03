import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Container, Description, Title } from './styles'

interface PostCardProps {
  title?: string
  publishedAt?: Date
  description?: string
}

export const PostCard = ({
  title,
  publishedAt,
  description,
}: PostCardProps) => {
  title = 'JavaScript data types and data structures'
  publishedAt = new Date('2023-08-03T12:03:57.986Z')
  description =
    'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = bar; // foo is now a string foo = true; // foo is now a boolean'
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
        <p>{description}</p>
      </Description>
    </Container>
  )
}
