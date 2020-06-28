import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { DataQuery } from 'Recoil/Selectors'
import { DataState } from 'Recoil/Atoms'
import { Appbar } from 'Components/molecules'
import { FilterHair, FilterProffesion, FilterAge, FilterHeight, FilterWeight, GnomeList } from 'Components/organisms'
import { FiltersContainer, GnomeContainer } from './styled'

const Home = () => {
  const { data } = useRecoilValue(DataQuery)
  const setData = useSetRecoilState(DataState)

  useEffect(() => {
    setData(data)
  }, [data, setData])

  return (
    <>
      <Appbar />
      <FiltersContainer>
        <FilterHair />
        <FilterProffesion />
        <FilterAge />
        <FilterHeight />
        <FilterWeight />
      </FiltersContainer>
      <GnomeContainer>
        <GnomeList />
      </GnomeContainer>
    </>
  )
}
export default Home
