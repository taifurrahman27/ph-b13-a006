import React from 'react';

const TabSection = ({ setActiveTab, carts }) => {

    return (
        <div className='container mx-auto text-center my-5'>
            <h1 className='text-5xl font-bold my-5'>Premium Digital Tools</h1>

            <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

            <div className="tabs tabs-box flex justify-center items-center">
                <input type="radio" name="my_tabs_1" className="tab rounded-full  " aria-label="Products"
                    defaultChecked onClick={() => setActiveTab("Products")} />

                <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label={`Cart (${carts.length})`} onClick={() => setActiveTab("Cart")} />
            </div>
        </div>
    );
};

export default TabSection;