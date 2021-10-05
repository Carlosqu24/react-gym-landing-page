import React from 'react'

import './Trainers.css';

// import db from '../../db/Services.json'

const db = [
      {
            id: 1,
            title: "Jhon",
            imageUrl: "http://www.copyflash.net/web/wp-content/uploads/bfi_thumb/our-team-4-1-32gnuklh724qwr4b45h6h6@2x.jpg"
      },
      {
            id: 2,
            title: "Max",
            imageUrl: "https://content.jdmagicbox.com/comp/delhi/d3/011pxx11.xx11.190519131419.b6d3/catalogue/shivam-fitness-trainer-rajouri-garden-delhi-personal-gym-trainers-m6g48llsf7.jpg?clr="
      },
      {
            id: 3,
            title: "Ryan",
            imageUrl: "https://www.jasti.com/suploads/2019/May/24/35684/1558679388WhatsApp%20Image%202019-05-24%20at%2011.57.33%20AM.jpeg"
      }
];

export const Trainers = () => {
      return (
            <div id="trainers" className="trainers section" >
                  <h2 className="title">Entrenadores</h2>

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
      )
}
