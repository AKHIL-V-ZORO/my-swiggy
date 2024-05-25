import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAllMenuURL } from '../../constants'
import './Menus.scss'
import SpecialDishes from '../specialDishes/SpecialDishes'
import FilteredDishes from '../filteredDishes/FilteredDishes'

const Menus = ({ menu }) => {


  return (
    <div className='menus'>
      <div className="menus--content">
        <h2 className="menus--title">Our Special Dishes</h2>
        <p>Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.</p>
      </div>
      <div className="menus--special">
        <SpecialDishes specialMenu={menu} />
      </div>
      <div className="filtered--dishes">
        <FilteredDishes/>
      </div>
    </div>
  )
}

export default Menus