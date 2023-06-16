import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Photography() {

    const [active, setActive] = useState('');

    const showActive = (e) => {
        setActive(`./hi-res-pics/${e.target.id}`)
        document.getElementById('active-box').style.display = 'flex'
    }
    return (
        <motion.div className='photography'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className='row' id='top-row'>
                <img src='./ig-pics/RPM00250.jpg' id='RPM00250.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM00999.jpg' id='RPM00999.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM02539.jpg' id='RPM02539.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM01814.jpg' id='RPM01814.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM01442.jpg' id='RPM01442.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM02180.jpg' id='RPM02180.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM05802.jpg' id='RPM05802.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM08576.jpg' id='RPM08576.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM00972.jpg' id='RPM00972.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM03343.jpg' id='RPM03343.jpg' alt='pic' className='photo' onClick={showActive}></img>

            </div>
            <div className='row' id='bottom-row'>
                <img src='./ig-pics/RPM03678.jpg' id='RPM03678.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM01660.jpg' id='RPM01660.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM03963.jpg' id='RPM03963.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM01510.jpg' id='RPM01510.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM04242.jpg' id='RPM04242.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM02404.jpg' id='RPM02404.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM07441.jpg' id='RPM07441.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM05776.jpg' id='RPM05776.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM00886.jpg' id='RPM00886.jpg' alt='pic' className='photo' onClick={showActive}></img>
                <img src='./ig-pics/RPM02441.jpg' id='RPM02441.jpg' alt='pic' className='photo' onClick={showActive}></img>
            </div>
            <div className='active-box' id='active-box'>
                <button onClick={() => document.getElementById('active-box').style.display = 'none'}>X</button>
                <img src={active} alt='Cannot display photo at this time'></img>
            </div>

        </motion.div>
    )
}

export default Photography
