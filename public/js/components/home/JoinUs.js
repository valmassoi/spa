import React from 'react'
import { Link } from 'react-router'

const JoinUs = () => {
  const style = {
    margin: '20px auto',
    marginBottom: '100px',
    zIndex: '10',
    'WebkitMaskImage': 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)',
    overflow: 'hidden',
    backgroundColor: 'white',
    width: '600px',
    borderRadius: '6px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }

  const leftStyle = {
    color: 'white',
    backgroundColor: '#1674f0',
    padding: '25px 10px',
    fontSize: '24px',
    fontWeight: '500',
  }
  const rightStyle = {
    padding: '25px 10px',
  }

  return (
    <div style={style}>
      <div class="row">
        <div class="col-sm-4 center-text" style={leftStyle}>
          SOME INFO
          <br />THAT IS
          <br />IMPORTANT
        </div>
        <div class="col-sm-8" style={rightStyle}>
          <h2>Features:</h2>
          -this one
          <br />-that one
          <br />-and another one
          <br />
          <Link to="/pricing"><button class="btn btn-primary">Join Us</button></Link>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
