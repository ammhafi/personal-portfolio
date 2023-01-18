import React from 'react'
import styles from './Footer.module.scss'

import { FaGithubSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.top}>
            <p>Thank you for your visit. Don't forget to contact me through the following social media... </p>
        </div>
        <div className={styles.socmed}>
            <a href="https://github.com/ammhafi" target="_blank" rel="noreferrer">
                <FaGithubSquare className={styles.icon} size={28} />
            </a>
            <a href="https://www.linkedin.com/in/akhlish-mushhafi-4545b4221" target="_blank" rel="noreferrer">
                <FaLinkedin className={styles.icon} size={28} /> 
            </a>
            <a href="https://www.twitter.com/ammhafi/" target="_blank" rel="noreferrer">
                <FaTwitterSquare className={styles.icon} size={28} />
            </a>
            <a href="https://www.instagram.com/ammhafi/" target="_blank" rel="noreferrer">
                <FaInstagramSquare className={styles.icon} size={28} />
            </a>
        </div>
        <div className={styles.bottom}>
            <p>
            &copy; {year} All Rights Reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer
