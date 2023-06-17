import emiratesLogo from './../img/flights/airlines/emirates.png';
import airIndiaLogo from './../img/flights/airlines/air_india.png';
import finnairLogo from './../img/flights/airlines/finnair.png';

const cities = ['Istanbul', 'Sydney', 'Baku', 'Male', 'Paris', 'New York', 'London', 'Tokyo', 'Dubai']
const airlines = ['Emirates', 'Finnair', 'Aeroflot', 'Air India']

export default function generateFlights(count) {
    let flights = [];

    for (let index = 0; index < count; index++) {
        const id = index;
        const from = cities[Math.floor(Math.random() * cities.length)]
        const to = cities[Math.floor(Math.random() * cities.length)]
        const airline = airlines[Math.floor(Math.random() * airlines.length)]
        const price = Math.floor(Math.random() * 1000)
        const rating = (Math.random() * 5).toFixed(1)


        const start = new Date();
        start.setDate(start.getDate() + Math.floor(Math.random() * 20));

        const end = new Date();
        end.setDate(end.getDate() + Math.floor(Math.random() * 20));

        const newEnd = `${end.getFullYear()}-${end.getMonth()}-${end.getDate()}`


        const date1 = new Date();
        const date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0, 0)


        // const arrayDepartDate = departDate.split(['-']);
        // const newDepartDate = new Date(arrayDepartDate[0], arrayDepartDate[1], arrayDepartDate[2], 0, 0);


        // JavaScript для преобразования строки в дату использует метод Date.parse().Этот метод может преобразовать строку, если она выполнена в соответствии со стандартом RFC2822 или ISO 8601.
        // В этом уроке рассмотрим стандарт ISO 8601, в котором строка должна иметь следующий формат: YYYY - MM - DDThh: mm: ss.sssZ.


        let flight = {
            id: id,
            from: from,
            to: to,
            start: date2,
            end: newEnd,
            airline: airline,
            logo: emiratesLogo,
            price: price,
            rating: rating,
        };

        flights.push(flight)
    };

    return flights;
};
