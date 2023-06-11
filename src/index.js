import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Generating test data
import generateFlights from './helpers/generateFlights';
import generateHotels from './helpers/generateHotels';
const flights = generateFlights(150);
const hotels = generateHotels(1);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App flights={flights} hotels={hotels} />
);