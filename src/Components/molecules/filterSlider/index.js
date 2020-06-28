import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Slider from '@material-ui/core/Slider'
import { useDebounce } from 'Components/utils/customHooks'
import { Container, Element } from './styled'

// TODO: test slider filter

const Filter = ({ color, value, type, filters, setValue }) => {
  const { min, max } = filters
  const [currentValue, setCurrentValue] = useState([min, max])
  const debouncedValue = useDebounce(currentValue, 250)

  useEffect(() => {
    if (debouncedValue !== value) setValue(debouncedValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  const getAdequateLabel = () => {
    switch (type) {
      case 'Age':
        return 'years'
      case 'Height':
        return 'Cm'
      case 'Weight':
        return 'Kg'
      default:
        return ''
    }
  }

  const label = getAdequateLabel()

  const financial = x => Number.parseFloat(x).toFixed(2)

  const valuetext = literal => `${financial(literal)} ${label}`

  const handleChange = (event, newValue) => {
    setCurrentValue(newValue)
  }

  const marks = [
    {
      value: min,
      label: `${min} ${label}`,
    },
    {
      value: max,
      label: `${max} ${label}`,
    },
  ]

  return (
    <Container color={color}>
      <Element>{type}</Element>
      <Slider
        color='secondary'
        value={currentValue}
        onChange={handleChange}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider'
        getAriaValueText={valuetext}
        min={min}
        max={max}
        marks={marks}
        step={1}
        className='slider'
      />
    </Container>
  )
}

Filter.propTypes = {
  color: PropTypes.string,
  value: PropTypes.array,
  type: PropTypes.string,
  filters: PropTypes.object,
  setValue: PropTypes.func,
}

Filter.defaultProps = {
  color: 'black',
  value: [],
  type: '',
  filters: {},
  setValue: () => {},
}

export default Filter
