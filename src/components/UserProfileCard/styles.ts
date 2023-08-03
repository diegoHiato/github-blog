import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

const appTheme = defaultTheme

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Bio = styled.div`
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${appTheme['base-title']};
    }

    & > a {
      color: ${appTheme.blue};
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: bold;

      border-bottom: 1px solid transparent;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      transition: border-bottom-color 0.15s;
      &:hover {
        border-bottom-color: ${appTheme.blue};
      }
    }
  }

  & > div:last-of-type {
    & > p {
      color: ${appTheme['base-text']};
      font-size: 1rem;
      font-style: normal;
      font-weight: normal;
      line-height: 160%;
    }
  }
`

export const ProfileImage = styled.section<{ $url: string }>`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
  background: ${appTheme['base-background']} url(${(props) => props.$url}) 0 0
    no-repeat;
  background-size: cover;
`

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  margin-top: -5.5rem;
  margin-inline: auto;

  border-radius: 10px;
  background-color: ${appTheme['base-profile']};

  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 2rem;

  cursor: default;

  & > section:last-of-type {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
