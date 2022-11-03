import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
  <div className={styles.navdiv}>
    
      <h1>This is Bodega</h1>
      <ul className={styles.navul}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browser">Browse Shops</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
  </div>
  )
}

export default Header