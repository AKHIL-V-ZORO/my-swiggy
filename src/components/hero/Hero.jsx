import React from 'react'
import './Hero.scss'
import heroImage from '../../assets/image/cover.jpg'

const Hero = () => {
  return (
    <div style={{backgroundImage:`url(${heroImage})`}} className="hero"> 
    <div className="hero--bottom--fade"></div>
      <div className="hero--content">
        <h2>Its all about Good food and taste</h2>
        <p>Part of the secret of a success in life is to eat what you like and let the food fight it out inside...</p>
      </div>
    </div>
  )
}

export default Hero