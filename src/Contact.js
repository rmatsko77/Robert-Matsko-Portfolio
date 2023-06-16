import { motion } from 'framer-motion'
import React from 'react'
import { SiGmail, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";

function Contact() {
    return (
        <motion.div className='contact'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                <ul className='contact-list'>
                    <li><SiGmail />Email</li>
                    <li><SiLinkedin />LinkedIn</li>
                    <li><SiInstagram />Instagram</li>
                    <li><SiGithub />GitHub</li>
                </ul>
        </motion.div>
    )
}

export default Contact