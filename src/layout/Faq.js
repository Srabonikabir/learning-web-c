import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
    return (
        <div>
        <div className=" bg-base-100 shadow-xl flex items-center justify-center py-6 gap-12 md:grid-cols-2 lg:grid-cols-3 px-4">
        <figure><img className='h-96' src="https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_large/public/2021-12/higher-education-banner-1600-10.png?h=8abcec71&itok=OArX9eNG" alt="Album"/></figure>
        <div className="card-body w-52 ">
          <h3 className="card-title text-4xl">FAQ</h3>
          <p className='dark:text-neutral-300'>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
          <div className="card-actions justify-end">
          <button className='primary-btn  '>
                  <Link className='text-white' to="/login">log In</Link><i className='fa fa-long-arrow-alt-right'></i>
                </button>
          </div>
        </div>
      </div>


      <div className="m-0 bg-base-300 text-base-content">
  <aside>
    <p className='mx-4'>Wait. What Is WordPress?</p>
  </aside>
</div>
<p className='mx-4'>Far far away, behind the word Mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmark</p>
   
<div className="m-0 bg-base-300 text-base-content">
  <aside>
    <p className='mx-4'>How Long Do I Get Support?</p>
  </aside>
</div>
<p className='mx-4'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line</p>

<div className="m-0 bg-base-300 text-base-content">
  <aside>
    <p className='mx-4'>Do I Need To Renew My License?</p>
  </aside>
</div>
<p className='mx-4'>Marks and devious Semikoli but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way</p>


<br />
<h4 className='mx-6'>Payment Question </h4>
<br />


<div className="m-0 bg-base-300 text-base-content">
  <aside>
    <p className='mx-4'>Wait. What Is WordPress?</p>
  </aside>
</div>
<p className='mx-4'>Far far away, behind the word Mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmark</p>

<div className="m-0 bg-base-300 text-base-content">
  <aside>
    <p className='mx-4'>Wait. What Is WordPress?</p>
  </aside>
</div>
<p className='mx-4'>Far far away, behind the word Mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmark</p>

<div className="m-0 bg-base-300 text-base-content">
  <aside>
    <p className='mx-4'>Wait. What Is WordPress?</p>
  </aside>
</div>
<p className='mx-4'>Far far away, behind the word Mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmark</p>


<br />
<h4 className='mx-6'>Specific Question </h4>
<br />


<div className="m-0 bg-base-300 text-base-content">
  <aside>
    <p className='mx-4'>Wait. What Is WordPress?</p>
  </aside>
</div>
<p className='mx-4 mb-4'>Far far away, behind the word Mountains far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmark</p>
   
    </div>





    );
};

export default Faq;