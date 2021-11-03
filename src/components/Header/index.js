import React, { useState } from 'react';

import './Header.css';


export const Header = () => {
      const [isOn, setIsOn] = useState(false);

      const handleBurgerMenu = () => setIsOn(!isOn);


      return (
            <div className="header">
                  <h2 className="header__logo">PowerGYM</h2>

                  <ul className="navbar">
                        <li className="navbar__item">
                              <a href="#" className="navbar__link">Inicio</a>
                        </li>

                        <li className="navbar__item">
                              <a href="#services" className="navbar__link">Servicios</a>
                        </li>

                        <li className="navbar__item">
                              <a href="#installations" className="navbar__link">Instalaciones</a>
                        </li>

                        <li className="navbar__item">
                              <a href="#trainers" className="navbar__link">Entrenadores</a>
                        </li>

                        <li className="navbar__item">
                              <a href="#testimonials" className="navbar__link">Testimonios</a>
                        </li>

                        <li className="navbar__item">
                              <a href="#contact" className="navbar__link">Contacto</a>
                        </li>
                  </ul>

                  {
                        isOn && 
                        <ul className="responsive-menu">
                              <li className="responsive-menu__item">
                                    <a href="#" className="responsive-menu__link">Inicio</a>
                              </li>

                              <li className="responsive-menu__item">
                                    <a href="#services" className="responsive-menu__link">Servicios</a>
                              </li>

                              <li className="responsive-menu__item">
                                    <a href="#trainers" className="responsive-menu__link">Entrenadores</a>
                              </li>

                              <li className="responsive-menu__item">
                                    <a href="#contact" className="responsive-menu__link">Contacto</a>
                              </li>
                        </ul>
                  }

                  <svg className="burger-menu" onClick={handleBurgerMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z" fill="currentColor" /><path d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="currentColor" /><path d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z" fill="currentColor" /></svg>
            </div>
      )
}
