import React from 'react';
import Banner from './Banner';
// import Card1 from './Card/Card1';
import Patners from './Patners';
import Section1 from './Card/Section1';
import Importance from './Card/Importance';
import Section2 from './Card/Section2';
import Section3 from './Card/Section3';
import Section4 from './Card/Section4';





const Home = () => {
    return (

            
            <>
             <Banner></Banner>
             <Patners></Patners>
             <Section1></Section1>
             {/* <Card1></Card1> */}
             <Importance></Importance>
             <Section4></Section4>
             <Section2></Section2>
             <Section3></Section3>
             
            </>
           
           
            
    
    );
};

export default Home;