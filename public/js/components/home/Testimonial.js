import React, { PropTypes } from 'react'

const Testimonial = ({ quote, person, position }) => {
  const style = {
    border: '1px solid rgba(22, 116, 240, 0.5)',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: 'white',
    // boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(0, 0, 0, 0.19)',
  }
  return (
    <div style={style}>
      <p>{quote}</p>
      <h6>{person}</h6>
      <p>{position}</p>
    </div>
  )
}

Testimonial.propTypes = {
  quote: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default Testimonial
