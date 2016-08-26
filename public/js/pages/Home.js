import React, { Component } from 'react'

import AboutList from '../components/AboutList'
import AnimationCard from '../components/AnimationCard'
import CompanyList from '../components/CompanyList'
import Integrations from '../components/Integrations'
import JoinUs from '../components/JoinUs'
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
        <AnimationCard />
        <Integrations />
        <AboutList />
        <Metrics />
        <Testimonials />
        <CompanyList />
        <JoinUs />
      </div>
    )
  }
}
