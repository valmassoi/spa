import React from 'react'
import { Parallax, Background } from 'react-parallax'

const Metrics = () => {
  const style = {
    color: 'white',
    backgroundColor: '#1674f0',
    height: '400px',
    position: 'relative',
  }
  const rowStyle = {
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
  }
  const statStyle = {
    color: '#C9DFF2',
    fontSize: '60px',
    fontWeight: '500',
  }

  return (
    <div style={style}>

    <Parallax strength={300}>
      <Background>
        <img alt="parallax" src="../../../images/mustache_logo.png" />
      </Background>
      <div style={{ height: '400px' }} />
    </Parallax>
    <div class="row" style={rowStyle}>
      <div class="col-sm-4 center-text">
        <h2 style={statStyle}>1mil</h2>
        <p style={{ fontSize: '19px' }}>ppl</p>
      </div>
      <div class="col-sm-4 center-text">
        <h2 style={statStyle}>5000</h2>
        <p style={{ fontSize: '19px' }}>companies</p>
      </div>
      <div class="col-sm-4 center-text">
        <h2 style={statStyle}>1</h2>
        <p style={{ fontSize: '19px' }}>love</p>
      </div>
    </div>
    </div>
  )
}

export default Metrics
