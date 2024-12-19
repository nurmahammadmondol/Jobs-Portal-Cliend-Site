import React from 'react';
import Banner from '../Header/Banner';
import AllCategories from '../Main/AllCategories/AllCategories';

const MainRoot = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="w-11/12 mx-auto my-20">
        <AllCategories></AllCategories>
      </div>
    </div>
  );
};

export default MainRoot;
