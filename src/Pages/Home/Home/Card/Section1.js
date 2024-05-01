import React from 'react';
import { Link } from 'react-router-dom';

const Section1 = () => {
    return (
        <div className=" bg-base-100 shadow-xl flex items-center justify-center py-6 gap-12 md:grid-cols-2 lg:grid-cols-3 px-4">
        <figure><img className='h-96' src="https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_large/public/2021-12/higher-education-banner-1600-10.png?h=8abcec71&itok=OArX9eNG" alt="Album"/></figure>
        <div className="card-body w-52 ">
          <h3 className="card-title text-4xl">For every student,
           every classroom.    
              Real results.</h3>
          <p className='dark:text-neutral-300'>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
          <div className="card-actions justify-end">
          <button className='primary-btn  '>
                  <Link className='text-white' to="/login">log In</Link><i className='fa fa-long-arrow-alt-right'></i>
                </button>
          </div>
        </div>
      </div>
    );
};

export default Section1;






