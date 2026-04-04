import React, { useState } from 'react';

const TabSection = ({ setActiveTab, carts }) => {

    const [active, setActive] = useState("Products");

    const handleTab = (tab) => {
        setActive(tab);
        setActiveTab(tab);
    };

    return (
        <div className='container mx-auto text-center my-16'>
            <h1 className='text-5xl font-extrabold my-5 text-[#101727]'>
                Premium Digital Tools
            </h1>

            <p className='text-[#627382]'>
                Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>

            <div className="flex justify-center items-center gap-4 mt-6">

                <button
                    onClick={() => handleTab("Products")}
                    className={`px-6 py-2 rounded-full font-semibold transform transition-all duration-300
                        ${active === "Products"
                            ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg scale-103"
                            : "bg-gray-200 text-[#101727] hover:scale-97"
                        }`}>
                    Products
                </button>

                <button
                    onClick={() => handleTab("Cart")}
                    className={`px-6 py-2 rounded-full font-semibold transform transition-all duration-300
                        ${active === "Cart"
                            ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg scale-103"
                            : "bg-gray-200 text-[#101727] hover:scale-97"
                        }`}>
                    Cart ({carts.length})
                </button>

            </div>
        </div>
    );
};

export default TabSection;