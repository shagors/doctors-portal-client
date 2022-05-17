import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () =>
        fetch(`https://fast-depths-58856.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointment On {format(date, 'PP')}</h4>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;