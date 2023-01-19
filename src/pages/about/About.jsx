import React from 'react'
import styles from './About.module.scss'
import profileImg from '../../assets/profile2.jpg'

const About = () => {
  return (
    <div className={`${styles.about} section__padding`} id="about">
        <div className={styles.image} data-aos='fade-down-right'>
            <img src={profileImg} alt="hafi" />
        </div>
        <div className={styles.desc} data-aos='fade-down-left'>
            <h1 className='gradient__text'>About Me</h1>
            <p className={styles.maindesc}>
                My Name is Akhlish Muhib Mushhafi. I am a generalist who has taken interest on the field of Tech Company. 
                I love learning new things and exploring new insights. 
                I have a skills in Digital Product Management and Fullstack Web Development. 
                Ready to develop myself throughout new challenges.
                </p>
            <div className={styles.info}>
                <div className={styles.box}>
                    <p><span> Age: </span> 24</p>
                    <p><span> Phone : </span> +6282281777765</p>
                </div>
                <div className={styles.box}>
                    <p><span> Email : </span> akhlish.muhib@gmail.com</p>
                    <p><span> Place : </span> Banyuwangi, Indonesia</p>
                </div>
            </div>
            <button><a 
            href='https://drive.google.com/file/d/17g_mrkntzjVBJDOFjBgj7K1z2aKaIrTh/view?usp=share_link'
            target="_blank"
            rel="noreferrer">
                Download CV</a></button>
        </div>
    </div>
  )
}

export default About
