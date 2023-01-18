import React, { useState } from 'react'
import styles from './Projects.module.scss'
import ProjectsData from './ProjectsData'

const allCategory = ['all', ...new Set(ProjectsData.map((item) => item.category))]

const Projects = () => {
    const [list, setList] = useState(ProjectsData)
    const [category, setCategory] = useState(allCategory)
    console.log(setCategory)


    const filterItems = (category) => {
        const newItems = ProjectsData.filter((item) => item.category === category)
        setList(newItems)
        if (category === "all") {
            setList(ProjectsData)
            return
        }
    }

  return (
        <div id="projects" className={`${styles.projects} section__padding`}>
            <div className={styles.heading} data-aos='flip-left'>
                <h1 className='gradient__text'>Projects</h1>
            </div>
            <div className={styles.categories}>
                {category.map((category) => (
                    <button onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                        {category}
                    </button>
                ))}
            </div>
            <div className={styles.content}>
                {list.map((item) => (
                    <div className={styles.box} data-aos='fade-up'>
                        <div className={styles.image}>
                            <img src={item.cover} alt="project" />
                        </div>
                        <div className={styles.overlay}>
                            <a href={item.url} target="_blank" rel="noreferrer">
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Projects
