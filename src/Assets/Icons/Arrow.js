import React from 'react'
import PropTypes from 'prop-types'

const Arrow = ({ fill, className }) => (
  <svg className={className} width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z' fill={fill} />
  </svg>
)

Arrow.defaultProps = {
  fill: '#17C15B',
  className: '',
}

Arrow.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
}

export default Arrow
