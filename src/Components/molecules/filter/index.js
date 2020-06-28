import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { useClickOutside } from 'Components/utils/customHooks'
import { Container, Element } from './styled'

// TODO: test simple filter

const Filter = ({ color, value, type, filters, setValue }) => {
  const [focused, setFocused] = useState(false)
  const containerRef = useRef()

  const close = () => setFocused(false)

  const onFilterSelect = (el, e) => {
    e.stopPropagation()
    setValue(el)
    close()
  }

  useClickOutside(containerRef, close)

  return (
    <Container ref={containerRef} color={color} onClick={() => setFocused(true)} focused={focused}>
      {focused ? (
        filters.map(el => (
          <Element onClick={e => onFilterSelect(el, e)} focused={focused} key={el}>
            {el}
          </Element>
        ))
      ) : (
        <Element marginTop='3.2rem' focused={focused}>
          {value === '' ? type : value}
        </Element>
      )}
    </Container>
  )
}

Filter.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  filters: PropTypes.array,
  setValue: PropTypes.func,
}

Filter.defaultProps = {
  color: 'black',
  value: '',
  type: '',
  filters: [],
  setValue: () => {},
}

export default Filter
