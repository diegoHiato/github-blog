import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './theme/default'

const appTheme = defaultTheme

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2 ${appTheme.blue};
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${appTheme['base-text']};
    background-color: ${appTheme['base-background']};
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
