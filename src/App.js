import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'
import { BsPersonCircle, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import AnimatedRoutes from './AnimatedRoutes';
import Welcome from './Welcome';

function App() {

  function setActive(e) {
    const element = document.getElementsByClassName('active');
    if (element.length) {
      element[0].classList.remove('active')
    }
    e.target.classList.add('active')

  }

  return (
    <div className='page-container'>
      <Welcome />
      <div id='video-container'>
        <video autoPlay loop muted>
          <source src='background-video.webm' type='video/webm'></source>
          <source src='background-video.mp4' type='video/mp4'></source>
        </video>
      </div>
      <div className='container'>
        <h1 className='name'>Robert Matsko</h1>
        <h2 className='title'><BsPersonCircle className='title-icon' />Front-End Developer / Designer / Photographer</h2>
        <h3 className='location'><MdLocationPin className='location-icon' />Brooklyn, New York</h3>
        <div className='socials'>
          <a href='https://github.com/rmatsko77' target='_blank' rel="noreferrer"><BsGithub /></a>
          <a href='https://www.instagram.com/r.p.matsko/' target='_blank' rel="noreferrer"><BsInstagram /></a>
          <a href='https://www.linkedin.com/in/robert-matsko-crcst-cis-905469198/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        </div>
        <ul className='tabs' id='tabs'>
          <li className='nav'><Link to='/about' onClick={setActive}><AiOutlineMinus id='nav-icon' />About</Link></li>
          <li className='nav'><Link to='/projects' onClick={setActive}><AiOutlineMinus id='nav-icon' />Projects</Link></li>
          <li className='nav'><Link to='/photography' onClick={setActive}><AiOutlineMinus id='nav-icon' />Photography</Link></li>
          <li className='nav'><Link to='/contact' onClick={setActive}><AiOutlineMinus id='nav-icon' />Contact</Link></li>
        </ul>
        <AnimatedRoutes />
      </div>
    </div>
  );
}

export default App;
