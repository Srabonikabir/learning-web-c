import React from 'react';


const Section4 = () => {
    return (
        
         <div>
        <div className='text-center m-8 '> 
      <h2 className='font-bold text-4xl text-cyan-500'>Over 40 million learners
</h2>
       <span className="hide-on-mobile font-semibold text-2xl">have used Alison to empower themselves
</span>
       </div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="card w-96 h-72 bg-base-100 shadow-xl">
  <figure className='h-32'>
    
    <img src="https://cdn.oreillystatic.com/oreilly/images/report-what-are-chatgpt-and-its-friends-553x420.jpg" alt="Shoes" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">Chat GPT</h2>
    <p>Transforming the Future – A Comprehensive How-to Guide on Harnessing the Power and Potential of AI" provides readers with an in-depth and practical exploration of the groundbreaking AI language model, ChatGPT-4</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className='h-32'><img src="https://images.squarespace-cdn.com/content/v1/5e0129c5956b7a5624566864/1609124206708-OYY2VY6I9XHN92H1MDM9/react-explained-cover-mockup.png?format=1500w" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">React Explained</h2>
    <p>React Explained is a fun and enjoyable introduction to React, which is the Javascript framework of choice for WordPress, Drupal, Magento, and thousands of developers.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className='h-32'><img src="https://cdn.mycplus.com/mycplus/wp-content/uploads/2023/03/Eloquent-JavaScript.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Java Script</h2>
    <p>JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    
<div className="flex items-center justify-center py-6 gap-12 md:grid-cols-2 lg:grid-cols-3 px-4">
        <figure><img className='h-96' src="https://st4.depositphotos.com/3474627/38238/v/450/depositphotos_382389490-stock-illustration-girl-studying-online-education-at.jpg" alt="Album"/></figure>
        
      </div>
  </div>
</div>
        </div>
    );
};

export default Section4;