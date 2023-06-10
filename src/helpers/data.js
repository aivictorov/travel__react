import airIndiaLogo from './../img/flights/airlines/air_india.png';
import emiratesLogo from './../img/flights/airlines/emirates.png';
import finnairLogo from './../img/flights/airlines/finnair.png';

const flights = [
    {
        id: 0,
        from: 'Lahore',
        to: 'Karachi',
        start: '12:00 pm', 
        end: '01:00 pm',
        airline: 'Emirates',
        logo: emiratesLogo,
        price: 150,
        rating: 4.9,
    },
    {
        id: 1,
        from: 'Karachi',
        to: 'Lahore',
        start: '15:00 pm', 
        end: '16:00 pm',
        airline: 'Emirates',
        logo: emiratesLogo,
        price: 208,
        rating: 1.2,
    },
    {
        id: 2,
        from: 'Lahore',
        to: 'Karachi',
        start: '18:00 pm', 
        end: '20:00 pm',
        airline: 'Finnair',
        logo: finnairLogo,
        price: 312,
        rating: 4.9,
    },
    {
        id: 3,
        from: 'Karachi',
        to: 'Lahore',
        start: '03:00 pm', 
        end: '13:00 pm',
        airline: 'Finnair',
        logo: finnairLogo,
        price: 680,
        rating: 4.8,
    },
    {
        id: 4,
        from: 'Karachi',
        to: 'Lahore',
        start: '23:00 pm', 
        end: '01:00 am',
        airline: 'Air India',
        logo: airIndiaLogo,
        price: 999,
        rating: 3.1,
    },
];

export default flights