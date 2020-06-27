import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { FilteredHairState } from 'Recoil/Atoms'
import { DataQuery } from 'Recoil/Selectors'
import { Filter } from 'Components/molecules'

const Hair = () => {
  const [filteredHair, setFilteredHair] = useRecoilState(FilteredHairState)
  const { hairFilter } = useRecoilValue(DataQuery)
  return <Filter value={filteredHair} setValue={setFilteredHair} filters={hairFilter} color='verdigris' />
}

export default Hair
