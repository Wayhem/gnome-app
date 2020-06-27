import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components/macro'
import { Home } from 'Components/pages'
import { ErrorBoundary } from 'Components/atoms'
import { GlobalStyle, theme } from 'Config/styled'

// TODO: routing with react-router
// TODO: react-i18next

const App = () => (
  <>
    <GlobalStyle />
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ErrorBoundary fallback={<div>error</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </RecoilRoot>
  </>
)

export default App
