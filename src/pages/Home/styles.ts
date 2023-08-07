import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

const appTheme = defaultTheme

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  & > section:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    & > div:first-of-type {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > h2 {
        color: ${appTheme['base-subtitle']};
        font-size: 1.125rem;
        font-style: normal;
        font-weight: bold;
      }

      & > span {
        color: ${appTheme['base-span']};
        font-size: 0.875rem;
        font-style: normal;
        font-weight: normal;
      }
    }

    & > div:last-of-type {
      & > form {
        & > input {
          width: 100%;
          padding-block: 0.75rem;
          padding-inline: 1rem;

          border-radius: 6px;
          border: 1px solid ${appTheme['base-border']};
          transition: border-color 0.25s;
          color: ${appTheme['base-text']};
          background-color: ${appTheme['base-input']};

          &::placeholder {
            color: ${appTheme['base-label']};
          }

          &:focus {
            border-color: ${appTheme.blue};
          }
        }
      }
    }
  }

  & > section:last-of-type {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;
  }
`

export const Container = styled.main`
  width: 864px;
  margin-inline: auto;
  margin-bottom: 18rem;

  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`
