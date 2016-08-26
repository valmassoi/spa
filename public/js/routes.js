import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './pages/Home'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Pricing from './pages/Pricing'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="pricing" component={Pricing} />
    <Route path="*" component={NotFound} />
  </Route>
)
