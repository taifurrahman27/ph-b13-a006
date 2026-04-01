import React from 'react';

const Cart = ({ carts, setCarts }) => {
    console.log(carts);
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handleProceed = () => {
        setCarts([]);
    };

    const handleRemove = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id);
        setCarts(filteredArray);

    }

    return (
        <div className='container mx-auto rounded-2xl my-5'>
            <h1 className='text-3xl font-bold p-5'>Your Cart</h1>

            {
                carts.map(item => <div key={item.id}>

                    <div className='bg-[#F9FAFC] p-5 flex justify-between items-center my-5 rounded-xl'>
                        <div className='flex gap-2.5'>
                            <img className='max-h-12 rounded-xl' src={item.icon} alt="" />
                            <div><h4 className="font-bold text-[#101727]">{item.name}</h4>
                                <p className="text-xs font-semibold text-blue-600">
                                    ${item.price} <span className="text-gray-500 font-normal">/ {item.period}</span>
                                </p></div>
                        </div>

                        <button
                            onClick={() => handleRemove(item)}
                            className="p-2 text-red-500 hover:text-red-600 rounded-xl transition-color
                    active:scale-95"
                            aria-label="Remove item"
                        >Remove
                        </button>
                    </div>


                </div>)
            }

            <div className="border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center mb-6 px-1">
                    <span className="text-gray-400 font-bold">Total Amount</span>
                    <span className="text-xl font-black">${totalPrice}</span>
                </div>

                <button
                    onClick={() => handleProceed()}

                    disabled={carts.length === 0}
                    className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full">
                    Proceed to Checkout
                </button>
            </div>

        </div>
    );
};

export default Cart;