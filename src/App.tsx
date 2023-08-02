import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UserProvider } from './contexts/User/provider'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
