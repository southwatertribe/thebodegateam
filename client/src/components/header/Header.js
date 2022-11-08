import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import Button from '../button/button.js'




function Header() {
  return (
  <div className={styles.navdiv}>

      <img 
      src="C:\Users\bsaab\OneDrive\Pictures\Screenshots\Bodega Cat.png"
      alt='BodegaCat'/>
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