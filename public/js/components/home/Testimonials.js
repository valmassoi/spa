import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  const style = {
    margin: '50px',
  }

  let testimonials = []
  for (let i = 0; i < 4; i++) {
    const testimonial = {// HACK
      quote: 'This is the best thing I have ever used',
      person: `person  ${i}`,
      position: 'CEO',
    }
    testimonials.push(testimonial)
  }
  return (
    <div style={style}>
      <h1>Testimonials</h1>
      <div class="row">
        <div class="col-sm-6">
          <Testimonial {...testimonials[0]} />
        </div>
        <div class="col-sm-6">
          <Testimonial {...testimonials[1]} />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <Testimonial {...testimonials[2]} />
        </div>
        <div class="col-sm-6">
          <Testimonial {...testimonials[3]} />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
