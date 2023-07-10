import airlines from '../data/airlines';
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

function findAirline(name) {
    return airlines.find((airline) => airline.name === name);
}

export {
    findFlight,
    findHotel,
    findRoom,
    findAirline,
}