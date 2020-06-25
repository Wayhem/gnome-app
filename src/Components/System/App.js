import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { Home } from 'Components/pages'

const App = () => (
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  </RecoilRoot>
)

export default App
