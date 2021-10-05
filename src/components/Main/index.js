import React from 'react'

// STYLES
import './Main.css';

// COMPONENTS
import { Hero } from '../Hero';
import { Services } from '../Services';
import { Trainers } from '../Trainers/index'
import { Contact } from '../Contact/index'

export const Main = () => {


      return (
            <main className="main">
                  <Hero />
                  <Services />
                  <Trainers />
                  <Contact />
            </main>
      )
}
