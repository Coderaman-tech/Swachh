import React from 'react';
function Navbar() {
  return (
    // public\static\images\logo.png
      <ul id='navbar'>
       <li>
        <a href='/'>
          <img src='./static/images/logo.png' alt=''/>
          Swachh
        </a>
       </li>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    
  )
}

export default Navbar
