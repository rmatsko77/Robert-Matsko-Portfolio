import './App.css';
import About from './About';
import Projects from './Projects';
import { Link, Route, Routes } from 'react-router-dom'
import { BsPersonCircle, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

function App() {
  return (
    <div className='container'>
      <h1 className='name'>Robert Matsko</h1>
      <h2 className='title'><BsPersonCircle className='title-icon'/>Front-End Developer / Photographer</h2>
      <h3 className='location'><MdLocationPin className='location-icon' />Brooklyn, New York</h3>
      <div className='socials'>
        <a href='https://github.com/rmatsko77' target='_blank'><BsGithub /></a>
        <a href='https://www.instagram.com/r.p.matsko/' target='_blank'><BsInstagram /></a>
        <a href='https://www.linkedin.com/in/robert-matsko-crcst-cis-905469198/' target='_blank'><BsLinkedin /></a>
      </div>
      <nav>
        <ul>
          <li><Link className='nav' to='/about'><AiOutlineMinus id='nav-icon'/>About</Link></li>
          <li><Link className='nav' to='/projects'><AiOutlineMinus id='nav-icon'/>Projects</Link></li>
          <li className='nav' ><AiOutlineMinus id='nav-icon'/>Photography</li>
          <li className='nav' ><AiOutlineMinus id='nav-icon'/>Contact</li>
        </ul>
      </nav>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
