import React from 'react'
import './card.css'

export default function Cards() {
    const cardsData = [
        {
            id: 1,
            title: 'akdjf',
            content: 'kl Kent',
            imgUrl: 'https://unsplash.it/200/203'
        },

        {
            id: 2,
            title: 'CAdjkfaRD 1',
            content: 'C Kent',

            imgUrl: 'https://unsplash.it/200/204'
        },

        {
            id: 3,
            title: 'CARD 1',
            content: 'Clark Kent',
            imgUrl: 'https://unsplash.it/200/205'
        },

        {
            id: 4,
            title: 'CARD 1',
            content: 'Clark Kent',
            imgUrl: 'https://unsplash.it/200/206'
        },

        {
            id: 5,
            title: 'CARD 1',
            content: 'Clark Kent',
            imgUrl: 'https://unsplash.it/200/207'
        },

        {
            id: 6,
            title: 'CARD 1',
            content: 'Clark Kent',
            imgUrl: 'https://unsplash.it/200/207'
        },

        { id: 7, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/208' },
        { id: 8, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/209' },
        { id: 9, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/210' },
        { id: 10, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/212' },
        { id: 11, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/213' },
        { id: 12, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/214' },
        { id: 13, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201' },
        { id: 14, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201' }
    ]
    const Card = (props) => (
        <div className="card  w-50 c1">
            <img src={props.imgUrl}
                alt={props.alt || 'Image'} className='w-75 text-center m-auto rounded' />
            <div className="card-content c2">
                <h2 className='text2'>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    );

    const CardContainer = (props) => (
        <div className="cards-container c3">
            {
                props.cards.map((card) => (
                    <Card title={card.title}
                        content={card.content}
                        imgUrl={card.imgUrl} />
                ))
            }
        </div>
    );

    return (
        <>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <h1 className='text2 mt-4 text-center'>react slider</h1>
                    <CardContainer cards={cardsData} />
                </div>
            </div>
        </>
    )
}



