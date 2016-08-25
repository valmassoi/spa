import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    }
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed
    this.setState({ collapsed })
  }
  setCollapsed() {
    this.setState({ collapsed: true })
  }

  renderLinks() {
    return [
      <li key={1}><Link to="/about" onClick={this.setCollapsed.bind(this)}>About</Link></li>,
      <li key={2}><Link to="/pricing" onClick={this.setCollapsed.bind(this)}>Pricing</Link></li>,
      <li key={3}><Link to="/signin" onClick={this.setCollapsed.bind(this)}>Sign In</Link></li>,
    ]
  }

  render() {
    const { collapsed } = this.state
    const homeClass = location.pathname === '/' ? 'active' : ''
    const navClass = collapsed ? 'collapse' : ''

    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              <img src="../images/mustache_logo.png" alt="mustache logo" width="100" />
            </a>
          </div>
          <div class={`navbar-collapse ${navClass}`}>
            <ul class="nav navbar-nav navbar-right">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
