import React from 'react'

import './Contact.css'

export const Contact = () => {
      return (
            <div id="contact" className="contact section">
                  <h2 className="title">Contacto</h2>

                  <form className="form">
                        <h2>Formulario</h2>

                        <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input 
                                    type="text"
                                    className="form-control" 
                                    name="email" 
                                    placeholder="contact@example.com" 
                              />
                        </div>

                        <div className="form-group">
                              <label htmlFor="message">Mensaje</label>
                              <textarea 
                                    type="text"
                                    className="form-control form-control--text-area"
                                    name="message" 
                                    placeholder="Déjanos tu comentario." 
                              ></textarea>
                        </div>

                        <input 
                              type="submit"
                              className="form-control form-control--submit" 
                              value="Enviar correo" />
                  </form>
            </div>
      )
}
