import emiratesLogo from './../img/flights/airlines/emirates.png';
import airIndiaLogo from './../img/flights/airlines/air_india.png';
import finnairLogo from './../img/flights/airlines/finnair.png';

const cities = ['Istanbul', 'Sydney', 'Baku', 'Male', 'Paris', 'New York', 'London', 'Tokyo', 'Dubai']
const airlines = ['Emirates', 'Finnair', 'Aeroflot', 'Air India']

function generateFlights(count) {
    let flights = [];

    // This function generates a date in the range from the current. 
    // Param is specified in days.
    function generateDate(days) {
        const date = new Date();
        date.setDate(date.getDate() + Math.floor(Math.random() * days));
        date.setHours(Math.floor(Math.random() * 24));
        date.setMinutes(Math.floor(Math.random() * 60 / 5) * 5);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.toISOString().substring(0, 1000)
    };

    console.log(generateDate(10));

    for (let index = 0; index < count; index++) {
        const id = index;
        const from = cities[Math.floor(Math.random() * cities.length)];
        const to = cities[Math.floor(Math.random() * cities.length)];
        const airline = airlines[Math.floor(Math.random() * airlines.length)];
        const price = Math.floor(Math.random() * 1000);
        const rating = (Math.random() * 5).toFixed(1);

        // const arrayDepartDate = departDate.split(['-']);
        // const newDepartDate = new Date(arrayDepartDate[0], arrayDepartDate[1], arrayDepartDate[2], 0, 0);

        let flight = {
            id: id,
            from: from,
            to: to,
            // start: date2,
            // end: newEnd,
            airline: airline,
            logo: emiratesLogo,
            price: price,
            rating: rating,
        };

        flights.push(flight)
    };

    return flights;
};

const flights = generateFlights(150);

export default flights;