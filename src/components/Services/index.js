import React from 'react';

import './Services.css';

const db = [
      {
            id: 1,
            title: "Pérdida de peso",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit culpa eum, distinctio optio nam quasi?",
            icon: "fas fa-weight"

      },
      {
            id: 2,
            title: "Musculación",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit culpa eum, distinctio optio nam quasi?",
            icon: "fas fa-dumbbell"
      },
      {
            id: 3,
            title: "Salud cardiovascular",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit culpa eum, distinctio optio nam quasi?",
            icon: "fas fa-heartbeat"
      }
]


export const Services = () => {


      return (
            <div id="services" className="services section">
                  <h2 className="title">Servicios</h2>

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
      )
}
