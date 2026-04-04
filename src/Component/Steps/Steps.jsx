import React from 'react';

const Steps = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='space-y-4 text-center mb-5'>
                <h1 className='text-5xl font-bold'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid justify-center items-center gap-7 md:grid-cols-2 xl:grid-cols-3'>
                <div className='bg-white card h-96 w-96 text-center self-center space-y-5'>
                    <div className='flex items-center 
                     justify-end h-10 m-4'>
                        <p className='text-xs p-4 font-bold bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-full '>01</p>
                    </div>
                    <div className='h-24 w-24 flex  items-center justify-center   self-center bg-[#9514FA10] rounded-full'>
                        <img className='self-center' src="/src/assets/user.png" alt="User" />
                    </div>
                    <h4 className='text-2xl font-bold text-[#101727]'>Create Account</h4>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='bg-white card h-96 w-96 text-center self-center space-y-5'>
                    <div className='flex items-center 
                     justify-end h-10 m-4'>
                        <p className='text-xs p-4 font-bold bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-full '>02</p>
                    </div>
                    <div className='h-24 w-24 flex  items-center justify-center   self-center bg-[#9514FA10] rounded-full'>
                        <img className='self-center' src="/src/assets/package.png" alt="Products" />
                    </div>
                    <h4 className='text-2xl font-bold text-[#101727]'>Choose Products</h4>
                    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

                <div className='bg-white card h-96 w-96 text-center self-center space-y-5'>
                    <div className='flex items-center 
                     justify-end h-10 m-4'>
                        <p className='text-xs p-4 font-bold bg-linear-to-r from-[#4F39F6]  to-[#9514FA] rounded-full '>03</p>
                    </div>
                    <div className='h-24 w-24 flex  items-center justify-center   self-center bg-[#9514FA10] rounded-full'>
                        <img className='self-center' src="/src/assets/rocket.png" alt="Rocket" />
                    </div>
                    <h4 className='text-2xl font-bold text-[#101727]'>Start Creating</h4>
                    <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                </div>

            </div>


        </div>

    );
};

export default Steps;