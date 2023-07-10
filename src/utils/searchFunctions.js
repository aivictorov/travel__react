import flights from './../data/flights';
import hotels from './../data/hotels';

function findFlight(id) {
    return flights.find((flight) => flight.id === id);
}

function findHotel(id) {
    return hotels.find((hotel) => hotel.id === id);
}

function findRoom(hotel, id) {
    return hotel.rooms.find((room) => room.id === id);
}

export {
    findFlight,
    findHotel,
    findRoom,
}