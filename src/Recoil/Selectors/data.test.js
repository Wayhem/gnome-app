import React, { Suspense } from 'react'
import { useRecoilValue, RecoilRoot } from 'recoil'
import { render } from '@testing-library/react'
import { hairColors, professions, locations, townsData } from './dataMock'
import Data from './data'

test('should fetch data and set possible filters', () => {
  const Component = () => {
    const { data, locationFilters, hairFilter, proffesionFilter } = useRecoilValue(Data)

    expect(data).toEqual(townsData)
    expect(locationFilters).toEqual(locations)
    expect(hairFilter).toEqual(hairColors)
    expect(proffesionFilter).toEqual(professions)

    return <></>
  }

  render(
    <RecoilRoot>
      <Suspense fallback={<div>loading...</div>}>
        <Component />
      </Suspense>
    </RecoilRoot>
  )
})
