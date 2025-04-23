import React from 'react'
import './searchbar.css'
import { Icongreen } from './Icongreen'
import { Icononormal } from './Icononormal'

import { faSliders, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Searchbar = ({ }) => {
  return (
    <>
      <div className="searchbar-container">
        <Icononormal iconon={<FontAwesomeIcon icon={faMagnifyingGlass} />}/>
        <input type="text" className="searchbar-input" placeholder="buscar producto" />
        <Icongreen icono={<FontAwesomeIcon icon={faSliders} />}/>
      </div>
    </>
  )
}