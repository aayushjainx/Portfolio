import React from 'react';
import Fade from 'react-reveal/Fade';

const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <p>{testimonials.user}</p>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section id='testimonials'>
      <div className='text-container'>
        <div className='row'>
          <Fade left>
            <div className='two columns header-col'>
              <h1>
                <span>Certifications</span>
              </h1>
            </div>
          </Fade>
          <Fade right cascade>
            <div className='ten columns flex-container'>
              <ul className='slides'>{testimonials}</ul>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
