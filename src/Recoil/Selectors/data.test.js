import axios from 'axios'
import React, { Suspense } from 'react'
import { useRecoilValue, RecoilRoot } from 'recoil'
import { render } from '@testing-library/react'
import Data from './data'

jest.mock('axios')

test('should fetch data and set possible filters', () => {
  const hairColors = ['black', 'green', 'pink', 'blue', 'rainbow', 'custom gamer rgb']
  const professions = [
    'conqueror',
    'archer',
    'mage',
    'blacksmith',
    'software developer',
    'hitman',
    'shepherd',
    'baker',
    'neet',
  ]
  const locations = ['Town1', 'Town2', 'Town3']
  const townsData = {
    [locations[0]]: [
      { name: 'Gnomeo', hair_color: hairColors[0], professions: professions.slice(0, 2) },
      { name: 'Julieta', hair_color: hairColors[1], professions: professions.slice(2, 4) },
    ],
    [locations[1]]: [
      { name: 'Keemstar', hair_color: hairColors[2], professions: professions.slice(4, 6) },
      { name: 'Joji', hair_color: hairColors[3], professions: professions.slice(6, 8) },
    ],
    [locations[2]]: [
      { name: 'Robert', hair_color: hairColors[4], professions: [professions[2], professions[5], professions[6]] },
      { name: 'Saiko', hair_color: hairColors[5], professions: [professions[8]] },
    ],
  }

  const resp = { data: townsData }
  axios.get.mockResolvedValue(resp)

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
