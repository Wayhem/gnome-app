import React from 'react'
import { useRecoilValue } from 'recoil'
import { DataQuery } from 'Recoil/Selectors'

const Home = () => {
  const data = useRecoilValue(DataQuery)
  console.log({ data })
  return <>hello</>
}
export default Home
