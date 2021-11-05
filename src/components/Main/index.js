import React from 'react'

// STYLES
import './Main.css';

// COMPONENTS
import { Hero } from '../Hero';
import { Services } from '../Services';
import { Installations } from '../Installations';
import { Testimonials } from '../Testimonials';   
import { Contact } from '../Contact/index'

export const Main = () => {


      return (
            <main className="main">
                  <Hero />
                  <Services />
                  {/* <Installations /> */}
                  <Testimonials />
                  <Contact />
            </main>
      )
}
