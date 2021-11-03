import React from 'react'

import './Trainers.css';

// import db from '../../db/Services.json'

const db = [
      {
            id: 1,
            title: "Jhon",
            imageUrl: "https://matrix-sportclub.ck.ua/files/page/13/13_2.jpg"
      },
      {
            id: 2,
            title: "Max",
            imageUrl: "https://images.squarespace-cdn.com/content/v1/568453f405f8e2c7f89c4ac3/1601000251225-X0UHIIY29O0PUWYTQSNW/i-5VKBWBM-L.jpg"
      },
      {
            id: 3,
            title: "Ryan",
            imageUrl: "https://images.squarespace-cdn.com/content/v1/5ae0d67145776eb4c23808b9/1604548626966-4G7EJ5MYFVA33KGES1XG/2M7A1987.jpg?format=1000w"
      }
];

export const Trainers = () => {
      return (
            <div id="trainers" className="trainers section" >
                  <h2 className="title section__title">Entrenadores</h2>

                  <div className="container">
                        <div className="trainers-container">
                              {
                                    db.map(trainer => (
                                          <div 
                                                className="trainer-card" 
                                                key={trainer.id}
                                          >
                                                <div className="trainer-card__background" style={{ backgroundImage: `url(${trainer.imageUrl})`, backgroundSize: 'cover' }}>
                                                      <i className={`${trainer.icon} icon`}></i>
                                                      <h2 className="trainer-card__title">{trainer.title}</h2>
                                                      <p className="trainer-card__description">{trainer.description}</p>
                                                </div>
                                          </div>
                                    ))
                              }
                        </div>
                  </div>
            </div>
      )
}
