import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div className='container mx-auto py-20 my-5'>
            <div className='space-y-4 text-center mb-15'>
                <h1 className='text-5xl font-bold'>Get Started in 3 Simple, Transparent Pricing</h1>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid justify-center items-center gap-10 md:grid-cols-2 xl:grid-cols-3 h-full'>
                <div className='bg-[#F2F2F2] card w-96 self-center space-y-3 p-5 h-full transform hover:scale-102 transition duration-300'>
                    <h5 className='text-2xl font-bold text-[#101727]'>Starter</h5>
                    <p className='text-[#627382]'>Perfect for getting started</p>
                    <h3 className='text-3xl font-bold text-[#101727] my-5'>$0<span className='text-[#627382] text-xl'>/month</span></h3>

                    <ul className='text-[#627382] mt-2'>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />Access to 10 free tools</li>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />Basic templates</li>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />Community support</li>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />1 project per month</li>
                    </ul>
                    <button className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full mt-auto">Get Started Free</button>
                </div>


                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] card w-96 self-center space-y-3 p-5 h-full text-white relative transform hover:scale-102 transition duration-300'>
                    <span className='bg-[#FEF3C6] text-[#BB4D00] absolute rounded-full px-4 py-2 font-bold ml-25 -mt-10'>Most Popular</span>

                    <h5 className='text-2xl font-bold'>Pro</h5>
                    <p className='text-white/80'>Best for professionals</p>

                    <h3 className='text-3xl font-bold my-5'>
                        $29
                        <span className='text-white/80 text-xl'>/month</span>
                    </h3>

                    <ul className='text-white/80 mt-2 space-y-2'>
                        <li className='flex gap-2 items-center'>
                            <FaCheck className='text-white' /> Access to all premium tools
                        </li>
                        <li className='flex gap-2 items-center'>
                            <FaCheck className='text-white' /> Unlimited templates
                        </li>
                        <li className='flex gap-2 items-center'>
                            <FaCheck className='text-white' /> Priority support
                        </li>
                        <li className='flex gap-2 items-center'>
                            <FaCheck className='text-white' /> Unlimited projects
                        </li>
                        <li className='flex gap-2 items-center'>
                            <FaCheck className='text-white' /> Cloud sync
                        </li>
                        <li className='flex gap-2 items-center'>
                            <FaCheck className='text-white' /> Advanced analytics
                        </li>
                    </ul>

                    <div className="btn bg-white rounded-full mt-auto border-none">
                        <button className='bg-clip-text font-bold text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                            Start Pro Trial
                        </button>
                    </div>

                </div>

                <div className='bg-[#F2F2F2] card w-96 self-center space-y-3 p-5 h-full transform hover:scale-102 transition duration-300'>
                    <h5 className='text-2xl font-bold text-[#101727]'>Enterprise</h5>
                    <p className='text-[#627382]'>For teams and businesses</p>
                    <h3 className='text-3xl font-bold text-[#101727] my-5'>$99<span className='text-[#627382] text-xl'>/month</span></h3>

                    <ul className='text-[#627382] mt-2'>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />Everything in Pro</li>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />Team collaboration</li>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />Custom integrations </li>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />Dedicated support</li>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />SLA guarantee</li>
                        <li className='flex gap-2 items-center'><FaCheck className='text-green-500' />Custom branding</li>
                    </ul>
                    <button className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full mt-auto">Get Started Free</button>
                </div>
            </div>


        </div>
    );
};

export default Pricing;