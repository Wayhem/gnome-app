import { selector } from 'recoil'
import { getTownData } from 'Services/api'

const dataFetchQuery = selector({
  key: 'currentData',
  get: async () => {
    const { data = {} } = await getTownData()
    const { Brastlewark = [] } = data
    const hairFilter = new Set()
    let proffesionFilter = new Set()
    Brastlewark.forEach(({ hair_color: hairColor, professions }) => {
      hairFilter.add(hairColor)
      proffesionFilter = new Set([...proffesionFilter, ...professions])
    })
    return { data, hairFilter: Array.from(hairFilter), proffesionFilter: Array.from(proffesionFilter) }
  },
})

export default dataFetchQuery
