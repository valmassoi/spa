import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'

import Footer from './Footer'
import Nav from './Nav'

class Layout extends Component {

  render() {
    const { location } = this.props
    return (
      <div>
        <Nav location={location} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default Layout
