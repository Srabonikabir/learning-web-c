import React, { useState } from 'react';
import Head from './Head';
import { Link } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    const [click, setClick] = useState(false)



    return (
        <div>
             
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='new' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    
        </div>
    );
};

export default Header;