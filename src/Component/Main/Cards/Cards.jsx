import React, { use } from 'react';
import { MdCheckCircle } from 'react-icons/md';

const Cards = ({ cardsPromise }) => {

    const cards = use(cardsPromise)
    console.log(cards);

    return (
        <div className='container mx-auto space-y-8'>

            {cards.map(card =>

                <div key={card.id} className="flex flex-col justify-between p-5 space-y-5  bg-white border border-gray-200 shadow-sm rounded-2xl transform hover:scale-102 transition duration-300">

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
                        <button className="w-full py-3  font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full active:scale-95">
                            Buy Now
                        </button>
                    </div>
                </div>

            )}

        </div>
    );
};

export default Cards;