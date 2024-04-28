import React from 'react'
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">

        <h1>Johnathan Chewning</h1>

        <div className="desktopMenu">
            <Link className="desktopMenuListItem">About Me</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Contact</Link>
            <Link className="desktopMenuListItem">Resume</Link>
        </div>
        
    </nav>
  )
}

export default Navbar