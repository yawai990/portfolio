import React from 'react';

import { motion } from 'framer-motion';
import { images } from '../constants';
import { AppWrap } from '../../Hoc';
import './Skills.scss';

const SkillsList = [
    {
        id: 1,
        image: images.html
    },
    {
        id: 2,
        image: images.css
    },
    {
        id: 3,
        image: images.javascript
    },
    {
        id: 4,
        image: images.jquery
    },
    {
        id: 5,
        image: images.bootstrap
    },
    {
        id: 6,
        image: images.sass

    },
    {
        id: 7,
        image: images.mysql

    },
    {
        id: 8,
        image: images.react

    },
]

const Skills = () => {
    return (
        <div className='app__skills'>
            <h4 className='b-text'>Skills & Experiences</h4>

            <div className="app__skills-exp">
                <div className="app__skills-wrapper">
                    {SkillsList.map(skill => {
                        return <motion.div whileInView={{ opacity: [0, 1] }}
                            whileHover={{ scale: 1.2, boxShadow: '0 0 20px var(--primary-color)' }}
                            key={skill.id}
                            transition={{ duration: 1, delay: 0.5 }}
                            key={skill.id}
                            className='app__mid'>
                            <img src={skill.image} alt="" />
                        </motion.div>
                    })}
                </div>

                <div className="app__exp">
                    <motion.div whileInView={{ opacity: [0, 1], x: [-100, 0] }}
                        transition={{ duration: 1 }}>

                        <h5 className="app__exp-year">
                            2017-2019
                        </h5>

                        <div className="app__exp-company">
                            <h5 className="b-text">Shwe Gone Daing Hotel</h5>
                            <h5 className="p-text">M & E Operator</h5>
                        </div>
                    </motion.div>
                    <motion.div whileInView={{ opacity: [0, 1], y: [100, 0] }}
                        transition={{ duration: 1, delay: 1 }}>
                        <h5 className="app__exp-year">2019-2021</h5>

                        <div className="app__exp-company">
                            <h5 className="b-text">Htet Mann Linn Co.Ltd</h5>
                            <h5 className="p-text">Electrical Engineer</h5>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AppWrap(Skills, 'skills');