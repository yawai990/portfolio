import React from 'react';
import { FaFacebookMessenger, FaTelegram, FaWhatsappSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Social.scss';

const Social = () => {
    return <div className='app__social-side-icon-wrapper'>
        <motion.a href='http://m.me/tristanel.hero' className='app__social-side-icon app__mid'
            whileHover={{ backgroundColor: 'var(--warning-color)' }} transition={{ duration: 0.5 }}>
            <FaFacebookMessenger />
        </motion.a>

        <motion.a href='https://t.me/YawaiZZ' className='app__social-side-icon app__mid'
            whileHover={{ backgroundColor: 'var(--warning-color)' }}>
            <FaTelegram />
        </motion.a>

        <motion.a href='https://api.whatsapp.com/send?phone=959250364540' className='app__social-side-icon app__mid'
            whileHover={{ backgroundColor: 'var(--warning-color)' }}>
            <FaWhatsappSquare />
        </motion.a>

    </div>
}
export default Social;