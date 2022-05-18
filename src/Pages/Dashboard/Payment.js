import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0fnhKA5GQnus2VzJO9R4QXKvEBIazsNhBj0EzZusUKAtXDjVXLPbsAdNqjSgf1zrbb8VrvbpQvIfTsJhtwixZ600iGxiMEC8');

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const {data: appointment, isLoading} = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {appointment.patientName}</p>
                    <h2 className="card-title text-2xl">Pay for {appointment.treatment}</h2>
                    <p>Your Appointment <span className='text-orange-700 font-bold'>{appointment.date}</span> at {appointment.slot}</p>
                    <p className='text-purple-700'>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    appointment={appointment}
                    ></CheckoutForm>
                </Elements>
            </div>
            </div>
        </div>
    );
};

export default Payment;