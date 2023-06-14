import React from 'react'

function Projects() {
  return (
    <div className='projects'>
      <ul className='projects-list'>
        <li className='project' id='redlite'>
          <a className='project-title' href='https://redlite.netlify.app/' target='_blank'>RedLite</a>
          <div className='project-bottom'>
            <p className='project-description'>Reddit Browser built in React Redux</p>
            <a href='https://github.com/rmatsko77/RedLite' target='_blank' className='repo-link'>Repo</a>
          </div>
        </li>
        <li className='project' id='whats-the-plan'>
          <a className='project-title' href='https://whats-the-plan.netlify.app/' target='_blank'>What's the Plan?</a>
          <div className='project-bottom'>
            <p className='project-description'>Simple to-do app built in React</p>
            <a href='https://github.com/rmatsko77/react-todo-app' target='_blank' className='repo-link'>Repo</a>
          </div>
        </li>
        <li className='project' id='beat-builder'>
          <a className='project-title' href='https://beat-builder.surge.sh/' target='_blank'>BeatBuilder</a>
          <div className='project-bottom'>
            <p className='project-description'>Creates playlists on users spotify profile built in React</p>
            <a href='https://github.com/rmatsko77/BeatBuilder' target='_blank' className='repo-link'>Repo</a>
          </div>
        </li>
        <li className='project' id='quick-keys'>
          <a className='project-title' href='https://quickkeys.netlify.app/' target='_blank'>QuickKeys</a>
          <div className='project-bottom'>
            <p className='project-description'>Keyboard that can be implimented in other apps, built in React</p>
            <a href='https://github.com/rmatsko77/virtual-keyboard' target='_blank' className='repo-link'>Repo</a>
          </div>
        </li>
        <li className='project' id='calc-hub'>
          <a className='project-title' href='https://my-practice-react-calc.netlify.app/' target='_blank'>CalcHub</a>
          <div className='project-bottom'>
            <p className='project-description'>Simple calculor built in React</p>
            <a href='https://github.com/rmatsko77/react-calc' target='_blank' className='repo-link'>Repo</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects