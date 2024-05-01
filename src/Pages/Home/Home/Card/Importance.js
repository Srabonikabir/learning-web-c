import React from 'react';

const Importance = () => {
    return (
        <div>
         <div className='text-center m-8 '> 
       <h2 className='font-bold text-3xl'>Not sure where to begin?</h2>
        <span className="hide-on-mobile font-semibold text-1xl">What is your main goal on WebHub?</span>
        </div>


<div className='flex flex-row '>
        <div className="card w-96 bg-base-100 shadow-xl m-8 ">

        <div className="card-body bg-teal-400 text-white font-semibold text-1xl">
          <div className="card-actions ">
            </div>
          <p>I want to upskill and Improve my Knowledge</p>
        </div></div>
        
      <div className="card w-96 bg-base-100 shadow-xl m-8 ">

<div className="card-body bg-teal-400 text-white font-semibold text-1xl">
  <div className="card-actions "> 
  </div>
  <p>I want to explore my career path</p>
</div>
</div>
<div className="card w-96 bg-base-100 shadow-xl m-8 ">

<div className="card-body bg-teal-400 text-white font-semibold text-1xl">
  <div className="card-actions ">
  </div>
  <p>I want to explore my hobbies and interests</p>
</div>
</div>



      </div>
     </div>
      
    );
};

export default Importance;