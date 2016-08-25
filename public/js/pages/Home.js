import React, { Component } from 'react'

import AboutList from '../components/AboutList'
import CompanyList from '../components/CompanyList'
import GetStarted from '../components/GetStarted'
import Metrics from '../components/Metrics'
import Testimonials from '../components/Testimonials'
import Welcome from '../components/Welcome'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {

  }

  componentWillUnmount() {
    // SomeStore.removeAllListeners('change')
  }

  render() {
    return (
      <div>
        <Welcome />
        <AboutList />
        <Metrics />
        <Testimonials />
        <CompanyList />
        <GetStarted />
      </div>
    )
  }
}
