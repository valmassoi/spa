import React from 'react'
import { Route, IndexRoute } from 'react-router'

import About from './pages/About'
import Home from './pages/Home'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Pricing from './pages/Pricing'
import Signin from './pages/Signin'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="pricing" component={Pricing} />
    <Route path="signin" component={Signin} />
    <Route path="*" component={NotFound} />
  </Route>
)
