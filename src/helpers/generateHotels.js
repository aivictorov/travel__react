export default function generateHotels(count) {
    let hotels = [];

    for (let index = 0; index < count; index++) {
        const id = index;

        let hotel = {
            id: id,
            title: 'TEST HOTEL TITLE',
        };

        hotels.push(hotel)
    };
    return hotels;
};