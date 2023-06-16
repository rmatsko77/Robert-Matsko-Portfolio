import React from 'react'
import { useLocation, Route, Routes } from 'react-router-dom'
import About from './About';
import Projects from './Projects';
import Photography from './Photography';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/photography' element={<Photography />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes