import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { DataQuery } from 'Recoil/Selectors'
import Button from '@material-ui/core/Button'
import { ArrowDropDown } from 'styled-icons/remix-line'
import { Row } from './styled'

const Bar = () => {
  const { locationFilters } = useRecoilValue(DataQuery)
  const filteredLocation = ''

  return (
    <Row>
      <Button endIcon={<ArrowDropDown />}>{filteredLocation}</Button>
    </Row>
  )
}

export default Bar
