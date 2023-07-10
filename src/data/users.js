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
            phone: '+1 000-000-0000',
            address: 'St 32 main downtown, Los Angeles, California, USA',
            birthday: '01-01-1992',
        },
        bookings: {
            flights: [
                {
                    direct: 1,
                    return: 2,
                    price: 200,
                    airline: "Emirates",
                    rating: "4.5",
                    duration: 7.0
                }
            ],
            hotels: [
                {
                    id: 1,
                    room: 1,
                    dates: [
                        "11.07.2023",
                        "12.07.2023"
                    ]
                }
            ]
        },
        favs: {
            flights: [
                {
                    direct: 1,
                    return: 2,
                    price: 200,
                    airline: "Emirates",
                    rating: "4.5",
                    duration: 12.5
                }
            ],
            hotels: [
                1
            ]
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
        cards: []
    },
];

export default users;