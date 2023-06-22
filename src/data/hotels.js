import logo from './../img/hotels/hotel-example-1/logo.jpg';
import cover from './../img/hotels/hotel-example-1/cover.jpg';
import coverSmall from './../img/hotels/hotel-example-1/cover_small.jpg';
import image01 from './../img/hotels/hotel-example-1/gallery/01.jpg';
import image02 from './../img/hotels/hotel-example-1/gallery/02.jpg';
import image03 from './../img/hotels/hotel-example-1/gallery/03.jpg';
import image04 from './../img/hotels/hotel-example-1/gallery/04.jpg';
import image05 from './../img/hotels/hotel-example-1/gallery/05.jpg';

const cities = ['Istanbul', 'Sydney', 'Baku', 'Male', 'Paris', 'New York', 'London', 'Tokyo', 'Dubai']

function generateHotels(count) {
    let hotels = [];

    for (let index = 0; index < count; index++) {
        const id = index;
        const name = `Hotel ### ${index} ###`
        const city = cities[Math.floor(Math.random() * cities.length)];
        const stars = Math.floor(Math.random() * 5);
        const rating = (Math.random() * 5).toFixed(1);

        let hotel = {
            id: id,
            name: name,
            description: 'Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.',
            city: city,
            address: 'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437',
            stars: stars,
            rating: rating,
            rooms: [
                {
                    id: 0,
                    name: 'Single Room with Shared Bathroom and Shared WC',
                    price: Math.floor(Math.random() * 150 + 50),
                    dates: generateDatesArray(30),
                },
                {
                    id: 1,
                    name: 'Standard Single Room with Shower and WC',
                    price: Math.floor(Math.random() * 225 + 75),
                    dates: generateDatesArray(30),
                },
                {
                    id: 2,
                    name: 'Double Room with Shared Bathroom and Shared WC',
                    price: Math.floor(Math.random() * 300 + 100),
                    dates: generateDatesArray(30),
                },
                {
                    id: 3,
                    name: 'Standard Double Room with private Shower and WC',
                    price: Math.floor(Math.random() * 350 + 150),
                    dates: generateDatesArray(30),
                },
            ],
            logo: logo,
            cover: cover,
            coverSmall: coverSmall,
            gallery: [image01, image02, image03, image04, image05],
            amenities: [
                { name: 'Outdoor pool', svgID: 'food' },
                { name: 'Fitness center', svgID: 'wifi' },
                { name: 'Indoor pool', svgID: 'seat' },
                { name: 'Bar/Lounge', svgID: 'food' },
                { name: 'Spa and wellness center', svgID: 'wifi' },
                { name: 'Restaurant', svgID: 'seat' },
                { name: 'Free Wi-Fi', svgID: 'food' },
                { name: 'Tea/coffee machine', svgID: 'wifi' },
                { name: 'Room service', svgID: 'seat' },
                { name: 'Restaurant', svgID: 'food' },
            ],
        };

        hotels.push(hotel)
    };

    return hotels;
};

function generateDatesArray(days) {
    let datesArray = [];
    const start = new Date();
    for (let index = 0; index < days; index++) {
        let current = new Date(start);
        current.setDate(current.getDate() + index);
        if (Math.random() > 0.5) {
            const formatted = formatDate(current)
            datesArray.push(formatted)
        }
    }
    return datesArray;
};

function formatDate(date) {
    let day = date.getDate();
    if (day.toString().length === 1) day = '0' + day.toString();
    let month = date.getMonth() + 1;
    if (month.toString().length === 1) month = '0' + month.toString();
    const year = date.getFullYear();
    const dateString = `${day}.${month}.${year}`;
    return dateString;
}

const hotels = generateHotels(1000);

export default hotels;