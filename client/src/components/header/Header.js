import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import Button from '../button/button.js'




function Header() {
  return (
  <div className={styles.navdiv}>

      <a href="client\src\images\BodegaCat.png">
      <img 
      src="client\src\images\BodegaCat.png"
      alt="BodegaCat"
      width="200" />
      </a>
      {/* <h1>This is Bodega</h1> */}
      <ul className={styles.navul}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browser">Browse Shops</Link></li>
        <li><Link to="/about">About</Link></li>
        <Button/>
      </ul>

      
  </div>
  )
}

export default Header