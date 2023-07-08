import userAvatar01 from './../img/users/avatars/01.jpg';
import userAvatar02 from './../img/users/avatars/02.jpg';
// import userAvatar03 from './../img/users/avatars/03.jpg';
// import userAvatar04 from './../img/users/avatars/04.jpg';
// import userAvatar05 from './../img/users/avatars/05.jpg';

const users = [
    {
        id: 0,
        
        account: {
            name: 'John Doe',
            avatar: userAvatar01,
            email: 'john.doe@gmail.com',
            password: '123',
            phoneNumber: '+1 000-000-0000',
            address: 'St 32 main downtown, Los Angeles, California, USA',
            birthday: '01-01-1992',
        },

        bookings: {
            flights: [],
            hotels: [],
        },
        favs: {
            flights: [],
            hotels: []
        },
        cards: [
            { id: 0, number: 1234, valid: '01/24' },
            { id: 1, number: 5678, valid: '12/26' },
        ]
    },
    {
        id: 1,

        account: {
            name: 'Mark Smith',
            avatar: userAvatar02,
            email: 'mark.smith@gmail.com',
            password: '123',
            phone: '+7 777-000-0000',
            address: 'St 77 main downtown, Los Angeles, California, USA',
            birthday: '01-01-1977',
        },

        bookings: {
            flights: [],
            hotels: [],
        },
        favs: {
            flights: [],
            hotels: []
        },
        cards: [
            { id: 0, number: 1234, valid: '01/24' },
            { id: 1, number: 5678, valid: '12/26' },
        ]
    },
];

export default users;