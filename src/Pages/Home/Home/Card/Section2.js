
import React from 'react';
import { Link } from 'react-router-dom';

const Section2 = () => {
    return (
        <div>
        <div className='text-center m-8 '> 
      <h2 className='font-bold text-3xl'>Advance Your Career. Learn In-demand Skills.
</h2>
       <span className="hide-on-mobile font-semibold text-1xl">Upskill in business analytics, health care, graphic design, management and more.</span>
       </div>


       <div className="card-actions m-9 grid gap-x-10 gap-y-8">
          <button className='primary-btn  '>
                  <Link className='text-white' to="/login">Information Systems</Link>
                </button>

                <button className='primary-btn  '>
                  <Link className='text-white' to="/login">JavaScrept</Link>
                </button>

                <button className='primary-btn  '>
                  <Link className='text-white' to="/login">React Explained</Link>
                </button>

                <button className='primary-btn  '>
                  <Link className='text-white' to="/login">Chat GPT</Link>
                </button>

                <button className='primary-btn  '>
                  <Link className='text-white' to="/login">Programing</Link>
                </button>

                <button className='primary-btn  '>
                  <Link className='text-white' to="/login">Computer Science</Link>
                </button>

                <button className='primary-btn  '>
                  <Link className='text-white' to="/login">Software engineering
</Link>
                </button>

                <button className='primary-btn  '>
                  <Link className='text-white' to="/login">Networking</Link>
                </button>

                
          </div>
        

</div>
  
   
    )
};

export default Section2;