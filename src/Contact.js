import { motion } from 'framer-motion'
import React from 'react'
import { SiGmail, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";

function Contact() {
    return (
        <motion.div className='contact'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                <div className='contact-list'>
                    <a href="mailto:rmatsko77@gmail.com"><SiGmail />Email</a>
                    <a href='https://www.linkedin.com/in/robert-matsko-crcst-cis-905469198/' target='_blank'><SiLinkedin />LinkedIn</a>
                    <a href='https://www.instagram.com/r.p.matsko/' target='_blank'><SiInstagram />Instagram</a>
                    <a href='https://github.com/rmatsko77' target='_blank'><SiGithub />GitHub</a>
                </div>
        </motion.div>
    )
}

export default Contact