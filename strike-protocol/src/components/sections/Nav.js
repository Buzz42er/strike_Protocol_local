import React from 'react'
import logo from '../../centered-no-text.png';


const Nav = () => {
  return (
    <nav>
    <div className='Logo-Nav'>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div className='Menu'>
        <a>About</a>
        <a>Playstyles</a>
        <a>Gallery</a>
        <a>Updates</a>
    </div>
  </nav>
  )
}

export default Nav