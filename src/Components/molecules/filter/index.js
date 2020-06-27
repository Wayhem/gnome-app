import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styled'

const Filter = ({ color }) => <Container color={color}>hello</Container>

Filter.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Filter
