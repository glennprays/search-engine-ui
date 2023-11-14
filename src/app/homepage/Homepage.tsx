"use client"
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/SearchLogo.png';
import Search from "@/components/search/searchEngine";

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen p-4'>
      <div className='mb-20 mr-20'>
        <Image src={logo} alt="Search Logo" width={150} height={150} />
      </div>
      <div className="xl:w-96">
        <Search />
      </div>
    </div>
  );
};

export default HomePage;
