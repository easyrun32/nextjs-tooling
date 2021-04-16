import React from 'react'
import PropTypes from 'prop-types'
import '../styles/globals.scss'

function MyApp ({ Component }) {
  return <Component />
}

MyApp.propTypes = {
  Component: PropTypes.elementType
}

export default MyApp
