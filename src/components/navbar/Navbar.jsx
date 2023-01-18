import React, { useEffect } from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
// import logo from '../../assets/logo2.png'
import styles from './Navbar.module.scss'

const Menu = () => {
  return (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#skills">Skills</a></p>
    <p><a href="#education">Education</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#contact">Contact</a></p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <header>
    <div className={scrolled ? `${styles.navbar} ${styles.scrolled}` : `${styles.navbar}`}>
      <div className={styles.navbarLinks}>
        <div className={styles.logo}>
          <h1 className='gradient__logo'>H</h1>
        </div>
        <div className={styles.navContainer}>
          <Menu />
        </div>
      </div>
      <div className={styles.menu}>
        {toggleMenu 
          ? <RiCloseLine color='#FFF' size={27} onClick={() => setToggleMenu(false)} /> 
          : <RiMenu3Line color='#FFF' size={27} onClick={() => setToggleMenu(true)} />  }
        {toggleMenu && 
          <div className={`${styles.menuContainer} scale-up-center`}>
            <div className={styles.links}>
              <Menu />
            </div>
          </div>}
      </div>
    </div>
    </header>
  )
}

export default Navbar