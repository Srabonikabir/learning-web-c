import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Home/Shared/Header';
import Footer from '../Pages/Home/Shared/Footer';


const Main = () => {
    return (
        <div>
            <Header></Header>
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;