import React from 'react'

const Welcome = () => {
  const style = {
    margin: '0 auto',
    textAlign: 'center',
  }

  return (
    <div style={style}>
      <h3>Welcome</h3>
      <h1>Some cool text,<br />that makes you want this product</h1>
      <button class="btn btn-primary">Click Here</button>
    </div>
  )
}

export default Welcome
