import { ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from 'styled-components'

interface CodeBlockProps {
  inline: boolean | undefined
  className: string | undefined
  children: ReactNode & ReactNode[]
  match: RegExpExecArray | null
}

const Container = styled.div`
  & > div {
    border-radius: 2px;
  }
`

export const CodeBlock = ({
  inline,
  className,
  children,
  match,
  ...props
}: CodeBlockProps) => {
  return !inline && match ? (
    <Container>
      <SyntaxHighlighter
        {...props}
        style={stackoverflowDark}
        language={match[1]}
        PreTag="div"
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </Container>
  ) : (
    <code {...props} className={className}>
      {children}
    </code>
  )
}
