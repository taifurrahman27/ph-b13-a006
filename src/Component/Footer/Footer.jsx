import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>

            <div className='container mx-auto'>
                <div className='grid justify-center text-center items-center py-20 md:text-left md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-15'>
                    <div className='space-y-5'>
                        <h1 className='text-4xl font-bold'>DigiTools</h1>
                        <p>Premium digital tools for creators, professionals, and businesses. <br /> Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-2xl font-bold'>Product</h4>
                        <ul className='space-y-4'>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-2xl font-bold'>Company</h4>
                        <ul className='space-y-4'>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-2xl font-bold'>Resources</h4>
                        <ul className='space-y-4'>
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-2xl font-bold'>Social Links</h4>
                        <div className='flex gap-5 justify-center items-center'>
                            <div className='p-3 rounded-full bg-white text-black'><TbBrandInstagramFilled className='h-6 w-6' />
                            </div>
                            <div className='p-3 rounded-full bg-white text-black'><FaFacebookSquare className='h-6 w-6' />
                            </div>
                            <div className='p-3 rounded-full bg-white text-black'><FaXTwitter className='h-6 w-6' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-[#FAFAFA]'>
                    <hr class="border-t border-gray-300"></hr>

                    <div className='text-center space-y-4 justify-between items-center  py-7 md:flex'>
                        <p>© 2026 Digitools. All rights reserved.</p>
                        <div className='space-y-3 md:flex gap-3'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Footer;