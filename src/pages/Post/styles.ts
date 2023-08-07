import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

const appTheme = defaultTheme

export const Body = styled.div`
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & > h1 {
    display: none;
  }

  & > p {
    line-height: 160%;

    & > code {
      padding: 2px 4px;

      border-radius: 4px;
      font-size: 0.75rem;
      color: ${appTheme['base-title']};
      background-color: ${appTheme['base-label']};
    }
  }
`

export const Info = styled.section`
  width: 100%;
  padding: 2rem;
  margin-top: -5.5rem;

  border-radius: 10px;
  background-color: ${appTheme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
      text-decoration: none;

      border-bottom: 1px solid transparent;
      color: ${appTheme.blue};
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      transition: border-color 0.15s;
      &:hover {
        border-color: ${appTheme.blue};
      }
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > h1 {
      color: ${appTheme['base-title']};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: bold;
      line-height: 130%;

      cursor: default;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;

      & > span {
        color: ${appTheme['base-span']};

        display: flex;
        align-items: center;
        gap: 0.5rem;

        cursor: default;
      }
    }
  }
`

export const PageContainer = styled.main`
  max-width: 864px;
  margin-inline: auto;
  margin-bottom: 128px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`
