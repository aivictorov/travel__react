import emiratesLogo from './../img/flights/airlines/emirates.png';
import airIndiaLogo from './../img/flights/airlines/air_india.png';
import finnairLogo from './../img/flights/airlines/finnair.png';

const cities = ['Istanbul', 'Sydney', 'Baku', 'Male', 'Paris', 'New York', 'London', 'Tokyo', 'Dubai']
const airlines = ['Emirates', 'Finnair', 'Aeroflot', 'Air India']

function generateFlights(count) {
    let flights = [];

    function generateDate(days) {
        const start = new Date();
        start.setDate(start.getDate() + Math.floor(Math.random() * days));
        start.setHours(Math.floor(Math.random() * 24));
        start.setMinutes(Math.floor(Math.random() * 60 / 5) * 5);
        start.setSeconds(0);
        start.setMilliseconds(0);

        let end = new Date(start);
        end.setMinutes(end.getMinutes() + Math.floor(Math.random() * 60 * 24));

        return [
            // start.toISOString().substring(0, 1000),
            // end.toISOString().substring(0, 1000) ,           
            start,
            end,
        ]
    };

    for (let index = 0; index < count; index++) {
        const id = index;
        const from = cities[Math.floor(Math.random() * cities.length)];
        const to = cities[Math.floor(Math.random() * cities.length)];
        const [start, end] = generateDate(30);
        const duration = ((end - start) / 1000 / 60 / 60);
        const airline = airlines[Math.floor(Math.random() * airlines.length)];
        const price = Math.floor(Math.random() * 1000);
        const rating = (Math.random() * 5).toFixed(1);

        let flight = {
            id: id,
            from: from,
            to: to,
            start: start,
            end: end,
            duration: duration,
            airline: airline,
            logo: emiratesLogo,
            price: price,
            rating: rating,
        };

        flights.push(flight)
    };

    return flights;
};

const flights = generateFlights(2500);

export default flights;