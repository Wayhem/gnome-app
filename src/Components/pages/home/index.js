import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { DataQuery } from 'Recoil/Selectors'
import { DataState } from 'Recoil/Atoms'
import { Appbar } from 'Components/molecules'
import { FilterHair } from 'Components/organisms'
import { FiltersContainer } from './styled'

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
      </FiltersContainer>
    </>
  )
}
export default Home
