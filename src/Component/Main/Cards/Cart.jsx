import React from 'react';

const Cart = ({ carts }) => {
    console.log(carts);

    return (
        <div className='container mx-auto rounded-2xl'>
            <h1 className='text-3xl font-bold p-5'>Your Cart</h1>

            {
                carts.map(item => <div key={item.id}>

                    <div className='bg-[#F9FAFC] p-5 flex justify-between items-center'>
                        <div className='flex gap-2.5'>
                            <img className='max-h-12 rounded-xl' src={item.icon} alt="" />
                            <div><h4 className="font-bold text-[#101727]">{item.name}</h4>
                                <p className="text-xs font-semibold text-blue-600">
                                    ${item.price} <span className="text-gray-500 font-normal">/ {item.period}</span>
                                </p></div>
                        </div>

                        <button
                            className="p-2 text-red-500 hover:text-red-600 rounded-xl transition-color
                    active:scale-95"
                            aria-label="Remove item"
                        >Remove
                        </button>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Cart;