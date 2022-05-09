import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'William Donald',
            review: '',
            location: 'Texas',
            img:people1,
        },
        {
            _id: 2,
            name: 'Kristiana Lee',
            review: '',
            location: 'Texas',
            img:people2,
        },
        {
            _id: 3,
            name: 'Jenny Watt',
            review: '',
            location: 'Texas',
            img:people3,
        },
    ];

    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl font-bold text-primary'>Testimonial</h4>
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 mt-12'>
                {
                reviews.map(review => <Review
                key={review._id}
                review={review}
                ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;