import React from 'react'
import './StylesWelcome.css'
import logo from '../../../assets/LogoFinZen.webp'
export const Welcome = () => {
  return (
    <section className='containerWelcome'>
        <img src={logo} alt="FinZen" className='logoFinzen'/>
        <h2>Bienvenido a FinZen!</h2>
        <button >Registrarse</button>
        <button >Iniciar Sesion</button>
    </section>
  )
}