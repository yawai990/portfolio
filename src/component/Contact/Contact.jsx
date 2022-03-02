import React, { useState } from 'react';
import { images } from '../constants';
import { AppWrap } from '../../Hoc';
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div id='contact' className='app__container app__contact'>
            <h4 className='b-text'>Take a Chat With Me</h4>

            <div className="app__mail-ph">
                <motion.div whileInView={{ scale: [0, 1.1, 1] }} transition={{ duration: 1 }}>
                    <a href="mailto:ywaung990@gmail.com">
                        <img src={images.email} alt="" />

                        <p className="p-text">Send Email</p>
                    </a>
                </motion.div>

                <motion.div whileInView={{ scale: [0, 1], x: [-90, 0] }}
                    transition={{ duration: 1, delay: 1 }}>
                    <a href="tel:+959250364540">
                        <img src={images.mobile} alt="" />

                        <p className="p-text">Call Me</p>
                    </a>
                </motion.div>
            </div>

            <div className="app__contact-form">

                <div className="app__form-control">
                    <input type="text" name='name' className='name' placeholder='Your Name...' />
                </div>

                <div className="app__form-control">
                    <input type="emial" name='email' className='emial' placeholder='Your Email...' />
                </div>

                <div className="app__form-control">

                    <textarea type="text" name='name' className='name' placeholder='Leave a message...'>
                    </textarea>
                </div>

                <button onClick={() => setLoading(true)}>{loading ? 'Sending' : 'Send'}</button>
            </div>

            <div className="copyright app__mid">
                <p className="p-text">All right reserved.Copy &copy;2022</p>
            </div>
        </div>
    )
}

export default AppWrap(Contact, 'contact');