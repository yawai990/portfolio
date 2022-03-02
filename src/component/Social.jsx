import React from 'react';
import { FaFacebookMessenger, FaTelegram, FaWhatsappSquare, FaViber } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Social.scss';

const Social = () => {
    return <div className='app__social-side-icon-wrapper'>
        <motion.a href='www.facebook.com' className='app__social-side-icon app__mid'
            whileHover={{ backgroundColor: 'var(--warning-color)' }} transition={{ duration: 0.5 }}>
            <FaFacebookMessenger />
        </motion.a>

        <motion.a href='www.facebook.com' className='app__social-side-icon app__mid'
            whileHover={{ backgroundColor: 'var(--warning-color)' }}>
            <FaTelegram />
        </motion.a>

        <motion.a href='www.facebook.com' className='app__social-side-icon app__mid'
            whileHover={{ backgroundColor: 'var(--warning-color)' }}>
            <FaWhatsappSquare />
        </motion.a>

        <motion.a href='www.facebook.com' className='app__social-side-icon app__mid'
            whileHover={{ backgroundColor: 'var(--warning-color)' }}>
            <FaViber />
        </motion.a>

    </div>
}
export default Social;