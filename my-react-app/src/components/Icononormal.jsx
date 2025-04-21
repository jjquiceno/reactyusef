import React from 'react'
import './icononormal.css'

export const Icononormal = ({ iconon }) => {
  return (
    <>
      <div className="cuadrado-normal">
        <div className="img-container-normal">
            <span>{iconon}</span>
        </div>
      </div>
    </>
  )
}