import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { Home } from 'Components/pages'
import { ErrorBoundary } from 'Components/atoms'
import { GlobalStyle } from 'Config/styled'

const App = () => (
  <>
    <GlobalStyle />
    <RecoilRoot>
      <ErrorBoundary fallback={<div>error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  </>
)

export default App
