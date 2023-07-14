import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <motion.div className='projects'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <ul className='projects-list'>
        <li className='project' id='redlite'>
          <div className='project-top'>
            <a className='project-title' href='https://redlite.netlify.app/' target='_blank' rel="noreferrer">RedLite</a>
          </div>
          <div className='project-bottom'>
            <p className='project-description'>Reddit Browser built in React Redux</p>
            <a href='https://github.com/rmatsko77/RedLite' target='_blank' className='repo-link' rel="noreferrer">Repo</a>
          </div>
        </li>
        <li className='project' id='x-tract'>
          <div className='project-top'>
            <a className='project-title' href='https://x-tract.netlify.app/' target='_blank' rel="noreferrer">x-tract</a>
          </div>
          <div className='project-bottom'>
            <p className='project-description'>100% SEO optimized landing page</p>
            <a href='https://github.com/rmatsko77/x-tract' target='_blank' rel="noreferrer" className='repo-link'>Repo</a>
          </div>
        </li>
        <li className='project' id='whats-the-plan'>
          <div className='project-top'>
            <a className='project-title' href='https://whats-the-plan.netlify.app/' target='_blank' rel="noreferrer">What's the Plan?</a>
          </div>
          <div className='project-bottom'>
            <p className='project-description'>Simple to-do app built in React</p>
            <a href='https://github.com/rmatsko77/react-todo-app' target='_blank' rel="noreferrer" className='repo-link'>Repo</a>
          </div>
        </li>
        <li className='project' id='beat-builder'>
          <div className='project-top'>
            <a className='project-title' href='https://beat-builder.surge.sh/' target='_blank' rel="noreferrer">BeatBuilder</a>
          </div>
          <div className='project-bottom'>
            <p className='project-description'>Creates playlists on users spotify profile built in React</p>
            <a href='https://github.com/rmatsko77/BeatBuilder' target='_blank' rel="noreferrer" className='repo-link'>Repo</a>
          </div>
        </li>
        <li className='project' id='quick-keys'>
          <div className='project-top'>
            <a className='project-title' href='https://quickkeys.netlify.app/' target='_blank' rel="noreferrer">QuickKeys</a>
          </div>
          <div className='project-bottom'>
            <p className='project-description'>Keyboard that can be implimented in other apps</p>
            <a href='https://github.com/rmatsko77/virtual-keyboard' target='_blank' rel="noreferrer" className='repo-link'>Repo</a>
          </div>
        </li>
        <li className='project' id='calc-hub'>
          <div className='project-top'>
            <a className='project-title' href='https://my-practice-react-calc.netlify.app/' target='_blank' rel="noreferrer">CalcHub</a>
          </div>
          <div className='project-bottom'>
            <p className='project-description'>Simple calculor built in React</p>
            <a href='https://github.com/rmatsko77/react-calc' target='_blank' rel="noreferrer" className='repo-link'>Repo</a>
          </div>
        </li>
      </ul>
    </motion.div>
  )
}

export default Projects