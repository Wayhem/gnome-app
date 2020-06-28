import { selector } from 'recoil'
import { getTownData } from 'Services/api'

const dataFetchQuery = selector({
  key: 'currentData',
  get: async () => {
    const { data = {} } = await getTownData()
    const locationFilters = Object.keys(data)
    const hairFilter = new Set()
    let proffesionFilter = new Set()
    let ageMin = ''
    let weightMin = ''
    let heightMin = ''
    let ageMax = 0
    let weightMax = 0
    let heightMax = 0
    locationFilters.forEach(key =>
      data[key].forEach(({ hair_color: hairColor, professions, age, height, weight }) => {
        if (age > ageMax) ageMax = age
        if (height > heightMax) heightMax = height
        if (weight > weightMax) weightMax = weight
        if (ageMin === '' || age < ageMin) ageMin = age
        if (heightMin === '' || height < heightMin) heightMin = height
        if (weightMin === '' || weight < weightMin) weightMin = weight
        hairFilter.add(hairColor)
        proffesionFilter = new Set([...proffesionFilter, ...professions])
      })
    )

    return {
      data,
      hairFilter: Array.from(hairFilter),
      proffesionFilter: Array.from(proffesionFilter),
      locationFilters,
      ageFilters: { min: ageMin, max: ageMax },
      heightFilters: { min: heightMin, max: heightMax },
      weightFilters: { min: weightMin, max: weightMax },
    }
  },
})

export default dataFetchQuery
