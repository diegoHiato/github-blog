import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

const appTheme = defaultTheme

export const Description = styled.div`
  & > div {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: ${appTheme['base-text']};
    font-size: 1rem;
    line-height: 160%;

    & > h1 {
      display: none;
    }
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  overflow: hidden;

  & > h1 {
    color: ${appTheme['base-title']};
    font-size: 1.25rem;
    line-height: 160%;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  & > span {
    flex-shrink: 0;
    width: 20%;

    color: ${appTheme['base-span']};
    font-size: 0.875rem;
    line-height: 160%;
  }

  & > span::first-letter {
    text-transform: capitalize;
  }
`

export const Container = styled.article`
  width: 416px;
  height: 260px;
  padding: 2rem;

  border-radius: 10px;
  border: 2px solid transparent;
  background-color: ${appTheme['base-post']};

  cursor: pointer;
  user-select: none;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  &:hover {
    transition: border-color 0.15s;
    border-color: ${appTheme['base-label']};
  }
`
