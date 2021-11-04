import React from 'react';

import './Services.css';

import db from '../../assets/db/Services.json'

export const Services = () => {


      return (
            <div id="services" className="services section">
                  <h2 className="title section__title">Servicios</h2>

                  <div className="container">
                        <div className="services-container">
                              {
                                    db.map(service => (
                                          <div className="service-card" key={service.id}>
                                                <i className={`${service.icon} service-card__icon`}></i>
                                                <h3 className="service-card__title">{service.title}</h3>
                                                <p className="service-card__description">{service.description}</p>
                                                
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </div>
      )
}
