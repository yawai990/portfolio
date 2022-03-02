import React, { useState } from 'react';

import { images } from '../constants';
import { motion } from 'framer-motion';
import NavLinks from '../Data';
import { RiBarChartHorizontalLine, RiCloseLine } from 'react-icons/ri';

import './Navbar.scss';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="app__navbar app__mid">
            <img src={images.myname} alt="" />

            <div className="app__nav-links app__mid">
                {NavLinks.map((item, ind) => {
                    return <li className='app__nav-link' key={ind}>
                        <a href={`#${item.linkName}`}>{item.linkName}</a>
                    </li>
                })}
            </div>

            <button style={{ margin: '0 2rem' }} onClick={() => setSidebar(true)}>
                <RiBarChartHorizontalLine />
            </button>

            {sidebar && <div className="app__container app__sidebar-container"
                onClick={() => setSidebar(false)}>
                <motion.div className='app__container app__sidebar'
                    whileInView={{ x: [200, 0] }}
                    transition={{ duration: 0.5 }}>

                    <div className="app__sidebar-header">
                        <div>
                            <img src={images.myname} alt="" />
                        </div>

                        <button className="app__close-btn" onClick={() => setSidebar(false)}>
                            <RiCloseLine />
                        </button>

                    </div>
                    <div className="app__sidebar-navlinks">
                        {NavLinks.map((link, ind) => {
                            return <motion.div key={ind} whileInView={{ x: [100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.3, delay: (ind * 0.2) }}>
                                <span>{link.icon}</span>
                                <a href={`#${link.linkName}`}>{link.linkName}</a>
                            </motion.div>
                        })}
                    </div>

                </motion.div>
            </div>}
        </div>

    )
}

export default Navbar;