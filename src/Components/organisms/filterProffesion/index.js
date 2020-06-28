import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { FilteredProfessionsState } from 'Recoil/Atoms'
import { DataQuery } from 'Recoil/Selectors'
import { Filter } from 'Components/molecules'

const Hair = () => {
  const [filteredProffesions, setFilteredProffesions] = useRecoilState(FilteredProfessionsState)
  const { proffesionFilter } = useRecoilValue(DataQuery)
  const stringValue = filteredProffesions.join(', ')

  const setNewValue = el => {
    if (filteredProffesions.find(oldEl => el === oldEl)) {
      setFilteredProffesions(filteredProffesions.filter(oldEl => el !== oldEl))
      return
    }

    setFilteredProffesions([...filteredProffesions, el])
  }
  return (
    <Filter type='Profession' value={stringValue} setValue={setNewValue} filters={proffesionFilter} color='cgBlue' />
  )
}

export default Hair
