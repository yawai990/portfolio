import React, { useState } from 'react';

import { AppWrap } from '../../Hoc';
import { motion } from 'framer-motion';
import { images } from '../constants';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './Projects.scss';

const data = [
    { title: 'Web Development', description: `it's a weather app,utilize this app to know your living city or any other city that u wanna know the weather`, imgURL: images.js01, cat: 'javascript', link: 'https://yawai990.github.io/weatherapp/', code: 'https://github.com/yawai990/weatherapp' },
    { title: 'Web Development', description: 'it\'s is a tiny e-commerce app,you can try like a real e-commerce', imgURL: images.react01, cat: 'javascript', link: 'https://shopmm.netlify.app/', code: 'https://github.com/yawai990/e-commerce' },
    { title: 'Web Development', description: 'I am a good web developer', imgURL: images.about01, cat: 'javascript', link: 'https://yawai990.github.io/weatherapp/', code: 'https://github.com/yawai990/weatherapp' },
    { title: 'Web Design', description: 'I am a good web developer', imgURL: images.about02, cat: 'mysql', link: 'https://yawai990.github.io/weatherapp/', code: 'https://github.com/yawai990/weatherapp' },
    { title: 'UI/UX', description: 'I am a good web developer', imgURL: images.about03, cat: 'react', link: 'https://yawai990.github.io/weatherapp/', code: 'https://github.com/yawai990/weatherapp' },
    { title: 'Web Animations', description: 'I am a good web developer', imgURL: images.about04, cat: 'mysql', link: 'https://yawai990.github.io/weatherapp/', code: 'https://github.com/yawai990/weatherapp' },
]

const Projects = () => {
    const [cat, setCat] = useState('all');
    const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 })
    const [filterPjt, setFilterPjt] = useState(data);

    // console.log(filterPjt);
    const filter = (category) => {
        setCat(category)
        setAnimatedCard({ y: 100, opacity: 0 })

        setTimeout(() => {
            setAnimatedCard({ y: 0, opacity: 1 })
            if (category === 'all') {
                setFilterPjt(data)
            } else {

                setCat(category)
                setFilterPjt(data.filter(work => work.cat === category))
            }
        }, 500);


    }

    return (
        <div id='projects' className='app__projects'>
            <h4 className='b-text'>Projects</h4>

            <div className="app__project-btns app__mid">
                {['all', 'react', 'javascript', 'mysql'].map((btn, ind) => {

                    return <button className={`app__project-btn ${btn === cat && 'btn-active'}`}
                        key={ind} onClick={() => filter(btn)}>
                        {btn}
                    </button>
                })}
            </div>

            <motion.div className='app__projects-card app__mid'>
                {filterPjt.map((pjt, ind) => {
                    return <motion.div className="card"
                        animate={animatedCard} key={ind}>
                        <div className='card-image'>
                            <img src={pjt.imgURL} alt="" />

                            <motion.div whileInView={{ opacity: 0, x: -100 }} whileHover={{ opacity: [0, 1], x: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                                <a href={pjt.link} target="_blank">
                                    <motion.div whileHover={{ scale: [1, 1.1] }} transition={{ duration: 0.3, staggerChildren: 0.5 }}
                                        className='app__mid'>
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={pjt.code} target="_blank">
                                    <motion.div whileHover={{ scale: [1, 1.1] }} transition={{ duration: 0.3 }}
                                        className='app__mid'>
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="card-body">
                            <h5 className="b-t">{pjt.title}</h5>
                            <p className='p-text'>{pjt.description}</p>
                        </div>
                    </motion.div>
                })}
            </motion.div>
        </div >
    )
}

export default AppWrap(Projects, 'Projects');