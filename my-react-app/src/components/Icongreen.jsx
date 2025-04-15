import React from 'react'
import './icongreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icongreen = ({ icono }) => {
  return (
    <>
      <div className="cuadrado">
        <div className="img-container">
            <span>{icono}</span>
        </div>
      </div>
    </>
  )
}
