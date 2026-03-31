import React from 'react';
import { IoPlayOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='container mx-auto text-center'>
            <div className='space-y-5 mb-4'>
                <div className='mx-auto bg-[#f1f2f6] w-fit h-fit p-2 shadow-md rounded-full flex justify-between items-center gap-1'>
                    <img src="/src/assets/colored-circle.svg" alt="" />
                    <button className='inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                        New: AI-Powered Tools Available</button>
                </div>
                <h1 className='text-7xl font-bold'>Supercharge Your <br />Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                    <br />Explore Products
                </p>
                <div>
                    <button className='btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>Explore Products</button>
                    <button className='btn btn-outline rounded-full'> <IoPlayOutline /> Watch Demo</button>
                </div>
            </div>

            <div className='flex items-center justify-center my-5'>
                <img src="/src/assets/banner.png" alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;