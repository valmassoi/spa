import React from 'react'

const AnimationCard = () => {
  const style = {
    position: 'absolute',
    margin: '20px auto',
    left: '0',
    right: '0',
    zIndex: '10',
    padding: '25px',
    backgroundColor: 'white',
    width: '600px',
    height: '500px',
    borderRadius: '6px',
    boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 20px 20px 0 rgba(0, 0, 0, 0.19)',
  }

  return (
    <div style={style}>
      <h1>AnimationCard</h1>
    </div>
  )
}

export default AnimationCard
