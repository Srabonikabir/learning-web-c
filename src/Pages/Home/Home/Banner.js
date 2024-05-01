import React from 'react';

import Heading from '../Shared/Heading/Heading';
import "./Banner.css"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
        <section className='banner'>
          <div className='container'>
            <div className='row '>
              <Heading  subtitle='WELCOME TO WebHub...' title='Best Online Education Expertise' />
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className='button'>
                <button className='primary-btn'>
                  <Link to="/login">log In</Link><i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                <Link to="/register">Register</Link><i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='pt-10'></div>
      </>
    );
};

export default Banner;