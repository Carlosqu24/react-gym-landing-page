import React from 'react'

import './Installations.css'

export const Installations = () => {
      return (
            <div id="installations" className="installations section">
                  <h2 className="section__title">Nuestras instalaciones</h2>

                  <div className="container">
                        <img className="installations__img" src='https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1075&q=80' alt="" />

                        <div className="installations-container">
                              <h2>Título</h2>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus quisquam ad dignissimos aperiam assumenda.</p>
                        </div>
                  </div>
            </div>
      )
}
