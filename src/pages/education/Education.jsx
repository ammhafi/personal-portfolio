import React from 'react'
import styles from './Education.module.scss'
import itbImg from '../../assets/itb.jpg'
import binarImg from '../../assets/binaracademy.jpg'

const Education = () => {
  return (
    <div className={`${styles.education} section__padding`} id="education">
      <div className={styles.title} data-aos="flip-right">
        <h1 className='gradient__text'>Education</h1>
        <p>Education is not the learning of facts, but the training of the mind to think.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.box} data-aos="fade-down-left">
          <div className={styles.image}>
            <img src={binarImg} alt="binar" />
          </div>
          <div className={styles.desc}>
            <div className={styles.subject}>
              <h2>Fullstack Web Development & Digital Product Management</h2>
            </div>
            <div className={styles.campus}>
              <p>Binar Bootcamp & Binar GO!, Binar Academy | Indonesia</p>
              <h3>2022 | Pursuing</h3>
            </div>
          </div>
        </div>
        <div className={styles.box} data-aos="fade-down-left">
          <div className={styles.image}>
            <img src={itbImg} alt="itbImg" />
          </div>
          <div className={styles.desc}>
            <div className={styles.subject}>
              <h2>Bachelor of Metallurgical Engineering</h2>
            </div>
            <div className={styles.campus}>
              <p>Bandung Institute of Technology | Indonesia</p>
              <h3>2015-2021 | Completed</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
