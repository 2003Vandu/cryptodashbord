import React from 'react'
import '../App.css';

function Navbar() {
  return (
    
      <nav className='container'>
          <div>
          <img src="/Images/brand_logo.png" alt="Brand Logo" />
          </div>
          <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
          <button>Login</button>
      
      </nav>

  )
}

export default Navbar;