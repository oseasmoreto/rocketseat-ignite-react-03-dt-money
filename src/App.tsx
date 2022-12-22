import { ThemeProvider } from 'styled-components'
import { TransacitonsProvider } from './contexts/TransactionContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransacitonsProvider>
        <Transactions />
      </TransacitonsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
