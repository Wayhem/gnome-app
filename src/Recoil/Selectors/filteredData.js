import { selector } from 'recoil'
import _ from 'lodash'
import { DataQuery } from 'Recoil/Selectors'
import {
  FilteredLocationState,
  FilteredAgeState,
  FilteredHairState,
  FilteredHeightState,
  FilteredProfessionsState,
  FilteredWeightState,
} from 'Recoil/Atoms'

// TODO: test selector

const dataFilter = selector({
  key: 'dataFiltered',
  get: ({ get }) => {
    const { data, ageFilters, weightFilters, heightFilters } = get(DataQuery)
    const location = get(FilteredLocationState)

    if (!location) return []

    let town = data[location]
    const filteredHair = get(FilteredHairState)
    const filteredProfessions = get(FilteredProfessionsState)
    const filteredAges = get(FilteredAgeState)
    const filteredHeights = get(FilteredHeightState)
    const filteredWeights = get(FilteredWeightState)

    if (filteredHair) {
      town = town.filter(({ hair_color: hairColor }) => hairColor === filteredHair)
    }

    if (!_.isEmpty(filteredProfessions)) {
      town = town.filter(({ professions = [] }) => {
        const found = filteredProfessions.some(r => professions.includes(r))
        return found
      })
    }

    if (filteredAges[0] !== ageFilters.min || filteredAges[1] !== ageFilters.max) {
      town = town.filter(({ age }) => age > filteredAges[0] && age < filteredAges[1])
    }

    if (filteredHeights[0] !== heightFilters.min || filteredHeights[1] !== heightFilters.max) {
      town = town.filter(({ height }) => height > filteredHeights[0] && height < filteredHeights[1])
    }

    if (filteredWeights[0] !== weightFilters.min || filteredWeights[1] !== weightFilters.max) {
      town = town.filter(({ weight }) => weight > filteredWeights[0] && weight < filteredWeights[1])
    }

    return town
  },
})

export default dataFilter
