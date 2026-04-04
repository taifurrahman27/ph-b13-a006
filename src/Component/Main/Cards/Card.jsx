import React, { useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { toast } from 'react-toastify';

const Card = ({ card, carts, setCarts }) => {

    const [isSubs, setSubs] = useState(false);
    const handleBuyNow = () => {
        setSubs(true);

        const isFound = carts.find(item => item.id === card.id);
        if (isFound) {
            toast.error('Item Lready in cart')
            return;
        }
        setCarts([...carts, card]);
        toast("Item Adde To Cart")
    };


    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl">
                    <img src={card.icon} alt={card.name} />
                </div>

                <span className="px-3 py-1 text-xs font-bold uppercase rounded-full bg-orange-100 text-orange-700">
                    {card.tag}
                </span>
            </div>

            <div>
                <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {card.description}
                </p>

                <ul className="mb-6 space-y-2">
                    {card.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-center">
                            <MdCheckCircle className='text-green-500 mr-2.5' /> {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100">
                <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-extrabold text-gray-900">${card.price}</span>
                    <span className="ml-1 text-sm font-medium text-gray-500">/{card.period}</span>
                </div>
                <button onClick={() => handleBuyNow()} className="w-full py-3  font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full active:scale-95">
                    {isSubs ? "Added to cart" : "Buy Now"}
                </button>
            </div>

        </div>
    );
};

export default Card;