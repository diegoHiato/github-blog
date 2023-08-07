import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import ReactMarkdown from 'react-markdown'
import { NavLink, useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from '../../components/CodeBlock'
import { Post } from '../../contexts/User/Context'
import { githubApi } from '../../services/githubApi'
import { Body, Info, PageContainer } from './styles'

interface PostDetailsType extends Post {
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export const PostDetails = () => {
  const { number } = useParams()
  const [postDetails, setPostDetails] = useState<PostDetailsType>({
    body: '',
    comments: 0,
    created_at: '',
    html_url: '',
    number: -1,
    title: '',
    user: { login: '' },
  })

  const formattedPublishmentDate =
    postDetails.created_at &&
    formatDistanceToNow(new Date(postDetails.created_at).getTime(), {
      locale: ptBR,
      addSuffix: true,
    })

  useEffect(() => {
    githubApi
      .get<PostDetailsType>(
        `repos/${import.meta.env.VITE_GITHUB_USER}/${
          import.meta.env.VITE_REPOSITORY
        }/issues/${number}`,
      )
      .then(({ data }) => setPostDetails(data))
  }, [number])

  return (
    <PageContainer>
      <Info>
        <header>
          <NavLink to={'/'}>
            <FaChevronLeft />
            <span>{'Voltar'}</span>
          </NavLink>

          <NavLink to={postDetails.html_url} target="_blank">
            <span>{'Ver no GitHub'}</span>
            <FaArrowUpRightFromSquare />
          </NavLink>
        </header>

        <div>
          <h1>{postDetails.title}</h1>

          <div>
            <span>
              <FaGithub />
              {postDetails.user.login}
            </span>

            <span>
              <FaCalendarDay />
              {formattedPublishmentDate}
            </span>

            <span>
              <FaComment />
              {`${postDetails.comments} ${
                postDetails.comments === 1 ? 'comentário' : 'comentários'
              }`}
            </span>
          </div>
        </div>
      </Info>

      <Body>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return (
                <CodeBlock
                  inline={inline}
                  className={className}
                  match={match}
                  {...props}
                >
                  {children}
                </CodeBlock>
              )
            },
          }}
        >
          {postDetails.body}
        </ReactMarkdown>
      </Body>
    </PageContainer>
  )
}
