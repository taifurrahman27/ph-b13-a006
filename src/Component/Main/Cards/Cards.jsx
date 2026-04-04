import React, { use } from 'react';
import Card from './Card';

const Cards = ({ cardsPromise, carts, setCarts }) => {

    const cards = use(cardsPromise);

    return (
        <div className='container grid justify-center items-center gap-7 md:grid-cols-2 xl:grid-cols-3 h-full mx-auto space-y-8'>

            {cards.map(card =>

                <div key={card.id} className="flex flex-col justify-center items-center max-w-lg p-5 space-y-5  bg-white border border-gray-200 shadow-sm rounded-2xl transform hover:scale-102 transition duration-300">
                    <Card card={card} carts={carts} setCarts={setCarts} />
                </div>
            )}

        </div>
    );
};

export default Cards;