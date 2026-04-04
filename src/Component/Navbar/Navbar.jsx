import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import Cart from '../Main/Cards/Cart';

const Navbar = ({ carts }) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li>
                                <a>Features</a>
                            </li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2 py-2 relative">
                    <IoCartOutline />
                    {
                        carts.length === 0 ? ("") : <span className='absolute mr-47 -mt-6 text-xs font-bold text-center bg-red-500 h-4 w-4 rounded-full'>{carts.length}</span>
                    }
                    <a className="btn">Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">Get Started</a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;