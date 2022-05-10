import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <div>
            <h4 className='text-xl text-secondary text-center'>Available Appointment On {format(date, 'PP')}</h4>
            <div>
                {
                    services.map(service => <p>{service.name}</p>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;