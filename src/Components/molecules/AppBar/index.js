import React, { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import Arrow from 'Assets/Icons/Arrow'
import { ProfilePic } from 'Components/atoms'
import { DataQuery } from 'Recoil/Selectors'
import { FilteredLocationState } from 'Recoil/Atoms'
import Button from '@material-ui/core/Button'
import { ArrowDropDown } from 'styled-icons/remix-line'
import { Row, useStyles, TownsContainer, Town, StyledText, SelectorContainer } from './styled'

const Bar = () => {
  // TODO: test selector
  const classes = useStyles()
  const [display, setDisplay] = useState('none')
  const { locationFilters } = useRecoilValue(DataQuery)
  const [filteredLocation, setFilteredLocation] = useRecoilState(FilteredLocationState)

  useEffect(() => {
    setFilteredLocation(locationFilters[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationFilters])

  const handleClick = () => {
    setDisplay('block')
  }

  const handleClose = location => {
    if (location !== filteredLocation) setFilteredLocation(location)
    setDisplay('none')
  }

  return (
    <Row>
      <SelectorContainer>
        <Button
          endIcon={<ArrowDropDown width='24' height='24' />}
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
          className={classes.button}
        >
          {filteredLocation}
        </Button>
        <div style={{ height: 0, border: '1px solid rgba(51, 51, 51, 0.24)', position: 'relative', display }}>
          <TownsContainer>
            {locationFilters.map(location => (
              <Town key={location} onClick={() => handleClose(location)}>
                <StyledText padding='8px 0'>{location}</StyledText>
                <Arrow className='icon-arrow' />
              </Town>
            ))}
          </TownsContainer>
        </div>
      </SelectorContainer>
      <ProfilePic />
    </Row>
  )
}

export default Bar
