import React, { useState } from 'react';
import './StylesInitialSection.css'
import logo from '../../../assets/LogoFinZen.webp'
import { Welcome } from '../Welcome/Welcome'

export const InitialSection = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  return showWelcome ? (
    <Welcome />
  ) : (
    <section className='containerInitialSection'>
      <img src={logo} alt="FinZen" className='logoFinzen'/>
      <button className='startButton' onClick={() => setShowWelcome(true)}>
        Empecemos!!
      </button>
      <h4>Designed By</h4>
      <h4>XYZ</h4>
    </section>
  )
}