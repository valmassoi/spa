import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './pages/Home'
import Layout from './components/Layout'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    {/* <Route path="*" component={NotFound} /> */}
  </Route>
)
