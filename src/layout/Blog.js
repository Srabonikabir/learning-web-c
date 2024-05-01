import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
        <div className=" bg-base-100 shadow-xl flex items-center justify-center py-6 gap-12 md:grid-cols-2 lg:grid-cols-3 px-4">
        <figure><img className='h-96' src="https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_large/public/2021-12/higher-education-banner-1600-10.png?h=8abcec71&itok=OArX9eNG" alt="Album"/></figure>
        <div className="card-body w-52 ">
          <h3 className="card-title text-4xl">Blog</h3>
          <p className='dark:text-neutral-300'>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
          <div className="card-actions justify-end">
          <button className='primary-btn  '>
                  <Link className='text-white' to="/login">log In</Link><i className='fa fa-long-arrow-alt-right'></i>
                </button>
          </div>
        </div>
      </div>



<section>
<div className='text-center m-8 '> 
      <h2 className='font-bold text-3xl'>Our Blog
</h2>
       <span className="hide-on-mobile font-semibold text-1xl">Stories Around Us
</span>
       </div>
<div className="flex items-center justify-center py-6">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-4">
    <div className="group relative cursor-pointer items-center rounded-lg  justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
     
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">For High Education</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Integer gravida mi id turpis tincidunt posuere. Nullam luctus eros eget interdum rutrum</p>
        <button className="rounded-full  py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60">See More</button>
      </div>
    </div>
    
    
    
    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">Educating You Well Is Our Aim
</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Integer gravida mi id turpis tincidunt posuere. Nullam luctus eros eget interdum rutrum.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5  capitalize text-black shadow shadow-black/60">See More</button>
      </div>
    </div>
    
    
    
    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-16">You Are A Priority For Us</h1>
        <p className="mb-3 text-lg italic text-white opacity-1  duration-300 group-hover:opacity-100">Integer gravida mi id turpis tincidunt posuere. Nullam luctus eros eget interdum rutrum.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">Distance Education With Fun
</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Integer gravida mi id turpis tincidunt posuere. Nullam luctus eros eget interdum rutrum.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60">See More</button>
      </div>
    </div>


   
    


  </div>
  <div className="fixed bottom-16">
    {/* <p className="font-com text-2xl font-semibold text-white">All Images are from <a href="https://unsplash.com" class="text-blue-500">Unsplash.com</a></p> */}
  </div>
</div>

</section>

</div>






    );
};

export default Blog;