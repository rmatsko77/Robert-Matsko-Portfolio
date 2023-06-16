import React from 'react'
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div className='about'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
            <p>From Harrisburg Pennsylvania and based in New York City, I am a front-end web developer, designer, and photographer. With expertise in creating user-friendly interfaces and crafting visually stunning websites, I bring ideas to life online. Through my photography, I capture unique moments and tell stories. I'm passionate about leveraging technology and creativity to deliver impactful digital experiences.
            </p>
        </motion.div>
    )
}

export default About;