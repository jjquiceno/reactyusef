import React from 'react'
import './tarjeta.css'
import { Iconoborderradius } from './Iconoborderradius'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Tarjeta = ({ name, time, stars, price, corazon }) => {
  return (
    <>
        <div className="tarjeta-container">
            <div className="tarjeta-circulo-cotainer">
                <div className="tarjeta-circulo"></div>
                <span className='tarjeta-corazon'>{corazon}</span>
            </div>
            <div className='tarjeta-text-container'>
                <div className='ttci'>
                    <p><span>{name}</span></p>
                </div>
                <div className='ttci'>
                    <div><span className='tarjetatime'>{time}</span></div>
                    <div><FontAwesomeIcon className='tarjetastar' icon={faStar} /><span>{stars}</span></div>
                </div>
                <div className='ttci'>
                    <div><span>{price}</span></div>
                    <div className='iconoradiusbox'>
                        <Iconoborderradius className="ibr"/>        
                    </div>
                </div> 
            </div>
        </div>
    </>
  )
}