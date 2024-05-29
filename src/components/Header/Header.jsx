import React from 'react'
import './Header.css'

const Header = () => {
  return (
   <header>
    <img src="./images/trollface.png" alt="trollface" className='header--image'/>
    <h2 className='header--title'>Meme Generator</h2>
    <h4 className='header--project'>React Course - project 3</h4>
   </header>
  )
}

export default Header