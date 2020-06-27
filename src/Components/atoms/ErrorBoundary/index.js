import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    }
  }

  render() {
    const { hasError } = this.state
    const { fallback, children } = this.props
    if (hasError) {
      return fallback
    }

    return children
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
}

export default ErrorBoundary
