import React from 'react'

function Navbar() {
  return (
    <div id='navbar-container'>

      <ul id='navbar'>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#home-page" id='title'>Swachh</a></li>
      </ul>

    </div>
  )
}

export default Navbar
