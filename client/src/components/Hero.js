import React from 'react'
import './hero.css'

export default function Hero() {

  return (
    <div className='hero'>
      <img src="/Images/Hero.png" alt="Hero" />

      <div className='buttons'>
        <button className='btnGetStarted'>Get Started</button>
        <button className='btnLearnMore'>Learn More</button>
      </div>

    </div>
  )
}
