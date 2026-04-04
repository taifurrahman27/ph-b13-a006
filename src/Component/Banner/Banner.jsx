import React from 'react';
import { IoPlayOutline } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='container mt-20 mx-auto text-center items-center lg:grid grid-cols-2'>

            <div className='flex items-center justify-center my-5 order-2'>
                <img src="/src/assets/banner.png" alt="Banner" />
            </div>

            <div className='space-y-5 mb-4 order-1'>
                <div className='mx-auto bg-[#f1f2f6] w-fit h-fit p-2 shadow-md rounded-full flex justify-between items-center gap-1'>
                    <img src="/src/assets/colored-circle.svg" alt="" />
                    <button className='inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                        New: AI-Powered Tools Available</button>
                </div>
                <h1 className='text-7xl font-bold'>Supercharge Your <br />Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                    <br />Explore Products
                </p>
                <div className='flex gap-2 py-3 justify-center items-center'>

                    <button className='btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-5 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:brightness-110 active:scale-95'>
                        Explore Products
                    </button>

                    <div className="inline-block p-0.5 rounded-full bg-linear-to-r from-[#4F39F6] via-[#7c3aed] to-[#9514FA] transition-all duration-300 hover:scale-103 hover:shadow-xl">

                        <button className="flex items-center gap-2 bg-white rounded-full px-5 py-2 font-semibold transition-all duration-300 hover:bg-gray-100 active:scale-97">

                            <img className='h-4 w-4' src="/src/assets/Play.png" alt="" />

                            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                Watch Demo
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;