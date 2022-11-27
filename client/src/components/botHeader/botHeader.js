import styles from "./botHeader.module.css"
import React from "react"


export default function Footer() {
    return (
        <footer id='main-footer' className={styles.bfootdiv}>
            <div class="copyright">
                Copyright &copy; 2022, Bodega 
            </div>
        </footer>
    )
}