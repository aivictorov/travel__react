import './scss/main.scss';
import Home from "./pages/Home";
import FlightBooking from './pages/FlightBooking';
import FlightDetails from './pages/FlightDetails';
import FlightListing from './pages/FlightListing';
import FlightSearch from './pages/FlightSearch';
import HotelBooking from './pages/HotelBooking';
import HotelDetails from './pages/HotelDetails';
import HotelListing from './pages/HotelListing';
import HotelSearch from './pages/HotelSearch';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SetPassword from './pages/SetPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyCode from './pages/VerifyCode';
import Account from './pages/Account';
import ScrollToTop from './utils/scrollToTop';
import RunScripts from './utils/runScripts';
import SVG from './SVG';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

import flights from './data/flights';
import hotels from './data/hotels';
import airlines from './data/airlines';
import reviews from './data/reviews';
import users from './data/users';

export const AppContext = createContext(null);

function App() {

    const [flightSearchParams, setFlightSearchParams] = useState(
        {
            'from': 'Paris',
            'to': 'London',
            'depart': '',
            'return': '',
            'passengers': '',
            'class': '',
        }
    );

    const [hotelSearchParams, setHotelSearchParams] = useState(
        {
            destination: 'Paris',
            checkIn: '',
            checkOut: '',
            dates: [],
        }
    );

    const [user, setUser] = useState(
        {
            id: 0,
            name: 'John Doe',
            email: 'John.doe@gmail.com',
            password: '************',
            phoneNumber: '+1 000-000-0000',
            address: 'St 32 main downtown, Los Angeles, California, USA',
            dateOfBirth: '01-01-1992',

            favourites: {
                flights: [1, 3, 17],
                hotels: [1, 3],
            }
        }
    );

    const [userData, setUserData] = useState([1, 3, 17]);
    const [userAuth, setUserAuth] = useState(false);

    const [activeTabs, setActiveTabs] = useState({
        searchForm: 'flights',
        accountTabs: 'main',
        accountTabsBookings: 'flights',
        accountTabsFav: 'flights',
    });

    return (
        <AppContext.Provider value={{
            flights,
            hotels,
            airlines,
            reviews,
            users,
            flightSearchParams, setFlightSearchParams,
            hotelSearchParams, setHotelSearchParams,
            userData, setUserData,
            userAuth, setUserAuth,
            activeTabs, setActiveTabs
        }}>
            <div className="App">
                <Router>
                    <ScrollToTop />
                    <SVG />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/flight-search" element={<FlightSearch />}></Route>
                        <Route path="/flight-listing" element={<FlightListing />}></Route>
                        <Route path="/flight-details/:directID/:returnID?" element={<FlightDetails />}></Route>
                        <Route path="/flight-booking/:directID/:returnID?" element={<FlightBooking />}></Route>
                        <Route path="/hotel-search" element={<HotelSearch />}></Route>
                        <Route path="/hotel-listing" element={<HotelListing />}></Route>
                        <Route path="/hotel-details/:hotelID" element={<HotelDetails />}></Route>
                        <Route path="/hotel-booking/:hotelID/:roomID" element={<HotelBooking />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/sign-up" element={<SignUp />}></Route>
                        <Route path="/set-password" element={<SetPassword />}></Route>
                        <Route path="/reset-password" element={<ResetPassword />}></Route>
                        <Route path="/verify-code" element={<VerifyCode />}></Route>
                        <Route path="/account" element={<Account />}></Route>
                    </Routes>
                    <RunScripts />
                </Router>
            </div>
        </AppContext.Provider>
    );
}

export default App;
