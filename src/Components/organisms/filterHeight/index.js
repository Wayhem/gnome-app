import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { FilteredHeightState } from 'Recoil/Atoms'
import { DataQuery } from 'Recoil/Selectors'
import { FilterSlider } from 'Components/molecules'

const Hair = () => {
  const [filteredHeight, setFilteredHeight] = useRecoilState(FilteredHeightState)
  const { heightFilters } = useRecoilValue(DataQuery)

  useEffect(() => {
    const { min, max } = heightFilters
    setFilteredHeight([min, max])
  }, [heightFilters, setFilteredHeight])

  return (
    <FilterSlider
      type='Height'
      value={filteredHeight}
      setValue={setFilteredHeight}
      filters={heightFilters}
      color='peachPuff'
    />
  )
}

export default Hair
