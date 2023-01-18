import React from 'react'
import styles from './Home.module.scss'
import people from '../../assets/people.png'
import Typewriter from "typewriter-effect"
import bannerImg from '../../assets/ai.png'

const Home = () => {
  return (
    <div className={`${styles.header} section__padding`} id="home">
        <div className={styles.content}>
          <h1 className='gradient__text'>
            Hi, I am Hafi.
          </h1>
          <p>
            I am into &nbsp; <Typewriter
                options={{
                  strings: ['Fullstack Web Development','Frontend Web Developement', 'Backend Web Developement', 'Digital Product Management'],
                  autoStart: true,
                  loop: true,
                }}
              />
          </p>
          {/* <div className={styles.input}>
            <input type="email" placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
          </div>  */}
          <div className={styles.people}>
            <img src={people} alt="people" />
            <p>{Math.floor(Math.random() * 200) + 1600} people were requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className={styles.image}>
              <img src={bannerImg} alt="banner" />
        </div>
        
    </div>
  )
}

export default Home