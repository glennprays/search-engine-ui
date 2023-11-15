'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/SearchLogo.png';
import Search from "@/components/search/searchEngine";

const HomePage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen p-4 bg-gradient-to-r from-blue-500 to-green-500'>
            <div className='mb-20 mr-20'>
                <Image src={logo} alt="Search Logo" width={150} height={150} />
            </div>
            <div className="bg-white rounded-lg p-10 shadow-md xl:w-100 border-5 border-blue-700 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
                    Cari Aja Kuy
                </h1>
                <Search />
            </div>
        </div>
    );
};

export default HomePage;
