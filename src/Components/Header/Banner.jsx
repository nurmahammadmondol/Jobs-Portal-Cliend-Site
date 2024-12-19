import React from 'react';
import BannerHappyImage1 from '../../assets/Photo/office happy1.jpg';
import BannerHappyImage2 from '../../assets/Photo/office happy2.jpg';
import { motion } from 'motion/react';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-gradient-to-r from-[#ecf3f4] to-[#d9e7e9]">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="md:w-1/2 flex flex-col gap-4">
            <motion.img
              animate={{ y: [10, 50, 10] }}
              transition={{ duration: 10, delay: 1, repeat: Infinity }}
              src={BannerHappyImage2}
              className="max-w-sm rounded-t-[45px] rounded-br-[45px] border-l-8 border-b-8 border-[#A2C4C9] shadow-2xl "
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay: 2, repeat: Infinity }}
              src={BannerHappyImage1}
              className="max-w-sm h-[15opx] rounded-t-[45px] rounded-br-[45px] border-l-8 border-b-8 border-[#A2C4C9] shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">
              The Easiest Way to Get Your New Job!
            </h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day.
            </p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
