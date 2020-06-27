import { selector } from 'recoil'
import { getTownData } from 'Services/api'
import { townsData } from './dataMock'

const dataFetchQuery = selector({
  key: 'currentData',
  get: async () => {
    let data = {}
    try {
      const { data: fetchedJson } = await getTownData()
      data = fetchedJson
    } catch (e) {
      data = townsData
    }
    const locationFilters = Object.keys(data)
    const hairFilter = new Set()
    let proffesionFilter = new Set()
    locationFilters.forEach(key =>
      data[key].forEach(({ hair_color: hairColor, professions }) => {
        hairFilter.add(hairColor)
        proffesionFilter = new Set([...proffesionFilter, ...professions])
      })
    )

    return { data, hairFilter: Array.from(hairFilter), proffesionFilter: Array.from(proffesionFilter), locationFilters }
  },
})

export default dataFetchQuery
