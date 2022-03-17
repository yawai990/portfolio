import React from 'react';
import { images } from '../constants';
import { motion } from 'framer-motion';

import { GoMarkGithub } from 'react-icons/go';
import { SiNetlify } from 'react-icons/si';
import { GrLinkedin } from 'react-icons/gr';
import { AppWrap } from '../../Hoc';

import './Home.scss';

const Home = () => {
    return (
        <div id='home' className="app__home">

            <motion.div className="app__hero" whileInView={{ x: [-100, 0], opacity: [0, 1], scale: [0, 1, 1.1, 1] }}
                transition={{ duration: 1 }}>
                <img src={images.hero} alt="" />
            </motion.div>

            <div className='app__intro app__mid'>
                <motion.div whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 1 }}>
                    <h5>👋 I am <br /> Junior Web Develper</h5>

                    <p>A <span style={{ color: "var(--primary-color)" }}>Junior Front End Developer </span>
                        passionate about creating interactive application</p>
                </motion.div>

                <div className='app__mid app__cv-btn'>
                    <motion.div className='app__mid' whileInView={{ y: [150, 0], opacity: [0, 1] }}
                        transition={{ duration: 1, delay: 0.5 }}>
                        <a href="">Resume</a>
                    </motion.div>

                    <div className="app__social-icon app__mid">
                        <motion.div className='app__mid' whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                            transition={{ duration: 1, delay: 1 }}>
                            <GoMarkGithub />
                        </motion.div>
                        <motion.div className='app__mid' whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                            transition={{ duration: 1, delay: 1.3 }}>
                            <GrLinkedin />
                        </motion.div>
                        <motion.div className='app__mid' whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                            transition={{ duration: 1, delay: 1.5 }}>
                            <SiNetlify />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppWrap(Home, 'home');