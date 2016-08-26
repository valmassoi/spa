import React, { Component } from 'react'

import AboutList from '../components/home/AboutList'
import AnimationCard from '../components/home/AnimationCard'
import CompanyList from '../components/home/CompanyList'
import Integrations from '../components/home/Integrations'
import JoinUs from '../components/home/JoinUs'
import Metrics from '../components/home/Metrics'
import Testimonials from '../components/home/Testimonials'
import Welcome from '../components/home/Welcome'

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
