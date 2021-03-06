import React from 'react'

const Footer = () => {
  const style = {
    position: 'absolute',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#EBF0F5',
    zIndex: '100',
  }

  return (
    <div style={style}>
      <a href="https://github.com/valmassoi/spa" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> github repo</a> by <a style={{ marginTop: '10px' }} href="https://twitter.com/valmassoi" target="_blank">@valmassoi</a>
    </div>
  )
}

export default Footer
