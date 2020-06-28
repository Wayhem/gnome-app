import React, { Suspense } from 'react'
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components/macro'
import { theme } from 'Config/styled'
import * as Atoms from 'Components/atoms'
import * as Molecules from 'Components/molecules'
import * as Organisms from 'Components/organisms'
import * as Pages from 'Components/pages'

describe('Rendering atoms', () => {
  Object.keys(Atoms).forEach(key => {
    it(`renders ${key}`, () => {
      const Component = Atoms[key]
      render(
        <Suspense fallback={<div>loading...</div>}>
          <RecoilRoot>
            <Component />
          </RecoilRoot>
        </Suspense>
      )
    })
  })
})

describe('Rendering molecules', () => {
  Object.keys(Molecules).forEach(key => {
    it(`renders ${key}`, () => {
      const Component = Molecules[key]
      render(
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>loading...</div>}>
            <RecoilRoot>
              <Component />
            </RecoilRoot>
          </Suspense>
        </ThemeProvider>
      )
    })
  })
})

describe('Rendering organisms', () => {
  Object.keys(Organisms).forEach(key => {
    it(`renders ${key}`, () => {
      const Component = Organisms[key]
      render(
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>loading...</div>}>
            <RecoilRoot>
              <Component />
            </RecoilRoot>
          </Suspense>
        </ThemeProvider>
      )
    })
  })
})

describe('Rendering pages', () => {
  Object.keys(Pages).forEach(key => {
    it(`renders ${key}`, () => {
      const Component = Pages[key]
      render(
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>loading...</div>}>
            <RecoilRoot>
              <Component />
            </RecoilRoot>
          </Suspense>
        </ThemeProvider>
      )
    })
  })
})
