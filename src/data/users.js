import userAvatar01 from './../img/users/avatars/01.jpg';
import userAvatar02 from './../img/users/avatars/02.jpg';
import userAvatar03 from './../img/users/avatars/03.jpg';
import userAvatar04 from './../img/users/avatars/04.jpg';
import userAvatar05 from './../img/users/avatars/05.jpg';

const users = [
    {
        id: 0,
        name: 'John Doe',
        avatar: userAvatar01,
        email: 'John.doe@gmail.com',
        password: '************',
        phoneNumber: '+1 000-000-0000',
        address: 'St 32 main downtown, Los Angeles, California, USA',
        dateOfBirth: '01-01-1992',
        favourites: {
            flights: [1, 3],
            hotels: [1, 2],
        }

    },
    {
        id: 1,
        name: 'Mark Smith',
        avatar: userAvatar02,
        email: 'John.doe@gmail.com',
        password: '************',
        phoneNumber: '+1 000-000-0000',
        address: 'St 32 main downtown, Los Angeles, California, USA',
        dateOfBirth: '01-01-1992',

        favourites: {
            flights: [1, 2],
            hotels: [2, 3],
        }
    },
];

export default users;