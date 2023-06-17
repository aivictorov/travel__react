import logo from './../img/hotels/hotel-example-1/logo.jpg';
import cover from './../img/hotels/hotel-example-1/cover.jpg';
import coverSmall from './../img/hotels/hotel-example-1/cover_small.jpg';
import image01 from './../img/hotels/hotel-example-1/gallery/01.jpg';
import image02 from './../img/hotels/hotel-example-1/gallery/02.jpg';
import image03 from './../img/hotels/hotel-example-1/gallery/03.jpg';
import image04 from './../img/hotels/hotel-example-1/gallery/04.jpg';
import image05 from './../img/hotels/hotel-example-1/gallery/05.jpg';

const hotels = [
    {
        id: 0,
        name: 'CVK Park Bosphorus Hotel Istanbul',
        description: 'Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.',
        city: 'Paris',
        address: 'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437',
        stars: 5,
        rating: 4.5,
        rooms: [
            { name: 'Single Room with Shared Bathroom and Shared WC', price: 120 },
            { name: 'Standard Single Room with Shower and WC', price: 180 },
            { name: 'Double Room with Shared Bathroom and Shared WC', price: 240 },
            { name: 'Standard Double Room with private Shower and WC', price: 360 },
        ],
        logo: logo,
        cover: cover,
        coverSmall: coverSmall,
        gallery: [image01, image02, image03, image04, image05],
        amenities: [
            {name: 'Outdoor pool', svgID: 'food'},
            {name: 'Fitness center', svgID: 'wifi'},
            {name: 'Indoor pool', svgID: 'seat'},
            {name: 'Bar/Lounge', svgID: 'food'},
            {name: 'Spa and wellness center', svgID: 'wifi'},
            {name: 'Restaurant', svgID: 'seat'},
            {name: 'Free Wi-Fi', svgID: 'food'},
            {name: 'Tea/coffee machine', svgID: 'wifi'},
            {name: 'Room service', svgID: 'seat'},
            {name: 'Restaurant', svgID: 'food'},
        ]
    }
];

export default hotels;