import React from 'react'
import logo from '../assets/Images/logo.png'

function Hero() {
  return (
    <div className='Hero'>
    <div className='nav'>
        <img src={logo} className='logo'></img>
        <div className='rightnav'>
            <div className='optionBtn'>    
            <label>✒️</label>
                <select>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
            </div>
            <button className='signIn'>Sign In</button>
        </div>
    </div>

    </div>
  )
}

export default Hero