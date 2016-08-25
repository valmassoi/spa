import React, { Component } from 'react'
// import { Link } from 'react-router'

import Footer from './Footer'
import Nav from './Nav'

export default class Layout extends Component {

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
