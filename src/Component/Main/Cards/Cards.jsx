import React, { use } from 'react';
import Card from './Card';

const Cards = ({ cardsPromise, carts, setCarts }) => {

    const cards = use(cardsPromise);
    // console.log(cards);


    return (
        <div className='container mx-auto space-y-8'>

            {cards.map(card =>

                <div key={card.id} className="flex flex-col justify-between p-5 space-y-5  bg-white border border-gray-200 shadow-sm rounded-2xl transform hover:scale-102 transition duration-300">
                    <Card card={card} carts={carts} setCarts={setCarts} />
                </div>
            )}

        </div>
    );
};

export default Cards;