import React from 'react';

const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div class = {`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pt-5 lg:pl-5 h-20 w-20'>
                <img src={img} alt="Album"/>
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
        </div>
    );
};

export default InfoCard;