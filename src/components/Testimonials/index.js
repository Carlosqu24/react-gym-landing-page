import React from 'react'

import './Testimonials.css'

export const Testimonials = () => {
      return (
            <div id="testimonials" className="testimonials section">
                  <h2 className="section__title">Testimonios</h2>

                  <div className="container">
                        <div className="testimonials-container">
                              <div className="testimonials-card">
                                    <img className="testimonials-card__img" src="https://matrix-sportclub.ck.ua/files/page/13/13_2.jpg" alt="" />

                                    <div className="testimonials-card__info">
                                          <h2>Carlos Quesada</h2>
                                          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, esse aliquam. Eligendi neque sint voluptates dicta quisquam praesentium culpa iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, esse aliquam. Eligendi neque sint voluptates dicta quisquam praesentium culpa iure."</p>
                                    </div>
                                    
                              </div>
                        </div>
                  </div>
            </div>
      )
}
