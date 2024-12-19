import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
