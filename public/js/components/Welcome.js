import React, { Component } from 'react'
const Scroll = require('react-scroll')
const scroll = Scroll.animateScroll

class Welcome extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  scrollToBottom() {
    scroll.scrollToBottom({ duration: '2000' })
  }

  render() {
    const style = {
      margin: '0 auto',
      marginTop: '100px',
      textAlign: 'center',
      color: '#1674f0',
    }

    return (
      <div style={style}>
        <h4>Welcome To The Best Thing Ever Made</h4>
        <h1 style={{ fontWeight: '500', fontSize: '54px', marginTop: '0' }}>Some interesting text,<br />u want this</h1>
        <button class="btn btn-primary" onClick={this.scrollToBottom}>Click Here</button>
      </div>
    )
  }
}

export default Welcome
