import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'
import { Container } from './styled'

const Filter = ({ color }) => (
  <Container color={color}>
    <Skeleton variant='text' width='80%' style={{ margin: '2rem 0 0 1rem' }} />
    <Skeleton variant='text' width='80%' style={{ margin: '2rem 0 0 1rem' }} />
  </Container>
)

Filter.propTypes = {
  color: PropTypes.string,
}

Filter.defaultProps = {
  color: 'black',
}

export default Filter
