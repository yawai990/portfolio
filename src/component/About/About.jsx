import React from 'react';

import { motion } from 'framer-motion';
import { AppWrap } from '../../Hoc';
import './About.scss';

const achieve = [
    { id: 1, year: 2018, title: 'First Prize', competition: 'Myanmar Skills Competition', field: 'Electrical' },
    { id: 2, year: 2018, title: 'Competitor', competition: 'Asean Skills Competition', field: 'Electrical' }
]


// i male this page as a carousel
const About = () => {
    return (
        <div id='about' className='app__about'>
            <h4 className='b-text'>About</h4>

            <div className="app__about-content">
                <motion.div className='app__edu'>
                    <h5 className='b-text'>Education</h5>

                    <motion.div className="app__edu-uni" whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1 }}>
                        <div className="app__edu-year">
                            2014-2018
                        </div>

                        <div className="app__edu-info">
                            <h5 className="b-text">West Yangon University</h5>
                            <p className="p-text">B.A(English)</p>
                        </div>
                    </motion.div>

                    <motion.div className="app__edu-cvt" whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1, delay: 1 }}>
                        <div className="app__edu-year">
                            2015-2018
                        </div>

                        <div className="app__edu-info">
                            <h5 className="b-text">Center For Vocational Training</h5>
                            <p className="p-text">Electrical Profession</p>
                        </div>
                    </motion.div>

                </motion.div>

                <motion.div className='app__achieve'>
                    <h5 className='b-text'>Achievements</h5>

                    {achieve.map(ach => {
                        const { id, title, competition, year, field } = ach;
                        return <motion.div whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5, delay: (id * 0.5) }}
                            key={id} className='app__achieve-content'>
                            <div className="app__achieve-year">
                                <p className="p-text">{year}</p>
                            </div>

                            <div className="app__achieve-info app__mid">
                                <h5 className="b-text">
                                    {competition}
                                </h5>
                                <p className="p-text">
                                    <span>{title}</span>
                                    <span>({field})</span>
                                </p>
                            </div>
                        </motion.div>
                    })}

                </motion.div>
            </div>
        </div>
    )
}

export default AppWrap(About, 'about');