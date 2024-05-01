import React, { useEffect } from 'react';
import Leftsisenav from './Leftsisenav';
import Rightsidenav from './Rightsidenav';

// import Category from './Category';
import { useParams } from 'react-router-dom';

const Allcourses = () => {
  // let { id } = useParams();
  // console.log({ id })
  // useEffect(() => {
  //   if (id) {
  //     // const json =  fetch(`http://localhost:5000/classes/${params.id}`);
  //     async function getData() {
  //       const res = await fetch(`http://localhost:5000/category/${id}`);
  //       // const data = await res.json();
  //       console.log({ res })
  //     }
  //     getData()
  //   }
  // }, [id])

  return (
    <div>
      <div className="grid grid-cols-6 gap-4 m-8">

        <div className="col-start-1 col-end-3 ...">
          <Leftsisenav></Leftsisenav>
        </div>


        <div className=" col-span-2 ...">

          {/* <Category></Category> */}


        </div>
        <div className="col-end-7 col-span-2 ...">
          <Rightsidenav></Rightsidenav>
        </div>

      </div>


    </div>
  );
};

export default Allcourses;