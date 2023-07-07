import userAvatar01 from './../img/users/avatars/01.jpg';
import userAvatar02 from './../img/users/avatars/02.jpg';
// import userAvatar03 from './../img/users/avatars/03.jpg';
// import userAvatar04 from './../img/users/avatars/04.jpg';
// import userAvatar05 from './../img/users/avatars/05.jpg';

const users = [
    {
        id: 0,
        name: 'John Doe',
        avatar: userAvatar01,
        email: 'john.doe@gmail.com',
        password: '123',
        phoneNumber: '+1 000-000-0000',
        address: 'St 32 main downtown, Los Angeles, California, USA',
        birthday: '01-01-1992',

        bookings: {
            flights: [[1, 2], [5], [6], [8, 9]],
            hotels: [0, 1],
        },
        favs: {
            flights: [],
            hotels: [0, 1, 2]
        },
        cards: [
            { number: 1234, validThru: '02/24' },
            { number: 5678, validThru: '03/25' },
            { number: 9012, validThru: '04/26' },
        ]
    },
    {
        id: 1,
        name: 'Mark Smith',
        avatar: userAvatar02,
        email: 'mark.smith@gmail.com',
        password: '123',
        phoneNumber: '+7 777-000-0000',
        address: 'St 77 main downtown, Los Angeles, California, USA',
        birthday: '01-01-1977',

        bookings: {
            flights: [],
            hotels: [0, 1],
        },
        favs: {
            flights: [],
            hotels: [0, 1, 2]
        },
        cards: [
            { number: 1234, validThru: '02/24' },
            { number: 5678, validThru: '03/25' },
            { number: 9012, validThru: '04/26' },
        ]
    },
];

export default users;