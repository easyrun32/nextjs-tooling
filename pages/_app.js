import React from 'react'
import PropTypes from 'prop-types'
import '../styles/globals.css'

function MyApp ({ Component }) {
  return <Component />
}

MyApp.propTypes = {
  Component: PropTypes.elementType
}

export default MyApp
