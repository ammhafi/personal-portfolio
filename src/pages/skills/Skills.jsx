import React from 'react'
import SkillsList from './SkillsList'
import MetricsList from './MetricsList'
import Carousel from 'react-multi-carousel';
import styles from './Skills.module.scss'
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
    const responsiveTech = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    const responsiveMetrics = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className={`${styles.skills} section__padding`} id="skills">
        <div className={styles.container} data-aos='flip-left' >
            <div className={styles.title}>
                <h1 className='gradient__text'>Skills</h1>
            </div>
            <div className={styles.main}>
                <Carousel className={styles.skillSlider} responsive={responsiveTech} itemClass="carousel-item-padding-40-px" infinite={true} autoPlay={true} autoPlaySpeed={1000} >
                {SkillsList.map((item)=> {
                    return (
                        <div className={styles.techStack}>
                            <img src={item.icon} alt="icon" />
                            <h5>{item.name}</h5>
                        </div>
                    )
                })}
                </Carousel>
                <Carousel className={styles.metricsSlider} responsive={responsiveMetrics} itemClass="carousel-item-padding-40-px" infinite={true} rewind={true}>
                {MetricsList.map((item) => {
                    return (
                        <div className={styles.metrics}>
                            <img src={item.image} alt="metrics" />
                            <h5>{item.text}</h5>
                        </div>
                    )
                })}
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Skills
