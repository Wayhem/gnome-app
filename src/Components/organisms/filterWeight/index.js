import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { FilteredWeightState } from 'Recoil/Atoms'
import { DataQuery } from 'Recoil/Selectors'
import { FilterSlider } from 'Components/molecules'

const Hair = () => {
  const [filteredWeight, setFilteredWeight] = useRecoilState(FilteredWeightState)
  const { weightFilters } = useRecoilValue(DataQuery)

  useEffect(() => {
    const { min, max } = weightFilters
    setFilteredWeight([min, max])
  }, [weightFilters, setFilteredWeight])

  return (
    <FilterSlider
      type='Weight'
      value={filteredWeight}
      setValue={setFilteredWeight}
      filters={weightFilters}
      color='bittersweet'
    />
  )
}

export default Hair
