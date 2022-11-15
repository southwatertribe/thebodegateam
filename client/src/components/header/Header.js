import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import Cat from '../header/BodegaCat.jpg'

function Header() {
  return (
  <div className={styles.navdiv}>
    {/* Logo Input */}
      <img 
      src= {Cat}
      alt="BodegaCat"
      width="100" />

    {/* Navigator into Header*/}
      <ul className={styles.navul}>
        <li className={styles.navli}><Link to="/">Home</Link></li>
        <li className={styles.navli}><Link to="/browser">Browse Shops</Link></li>
        <li className={styles.navli}><Link to="/about">About</Link></li>
        <li className={styles.navli}><Link to="/yourshop">Your Shop</Link></li>
      </ul>
  </div>
  )
}

export default Header