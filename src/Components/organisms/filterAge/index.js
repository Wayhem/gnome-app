import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { FilteredAgeState } from 'Recoil/Atoms'
import { DataQuery } from 'Recoil/Selectors'
import { FilterSlider } from 'Components/molecules'

const Hair = () => {
  const [filteredAge, setFilteredAge] = useRecoilState(FilteredAgeState)
  const { ageFilters } = useRecoilValue(DataQuery)

  useEffect(() => {
    const { min, max } = ageFilters
    setFilteredAge([min, max])
  }, [ageFilters, setFilteredAge])

  return (
    <FilterSlider
      type='Age'
      value={filteredAge}
      setValue={value => setFilteredAge(value)}
      filters={ageFilters}
      color='LightYellow'
    />
  )
}

export default Hair
