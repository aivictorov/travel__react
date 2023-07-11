import './scss/main.scss';
import { createContext, useState, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

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
import SVG from './SVG';

import flights from './data/flights';
import hotels from './data/hotels';
import airlines from './data/airlines';
import reviews from './data/reviews';
import users from './data/users';
import { useEffect } from 'react';
import Test from './Test';

export const AppContext = createContext(null);

function App() {

    const [flightSearchParams, setFlightSearchParams] = useState(
        {
            from: '',
            to: '',
            depart: '',
            return: '',
            passangers: '',
            class: '',
        }
    );

    const [hotelSearchParams, setHotelSearchParams] = useState(
        {
            destination: '',
            checkIn: '',
            checkOut: '',
            allDates: [],
            rooms: '',
            guests: '',
        }
    );

    const [user, setUser] = useState({
        id: '',
        name: '',
        avatar: '',
        email: '',
        password: '',
        phone: '',
        adress: '',
        birthday: '',
        bookings: {
            flights: [],
            hotels: [],
        },
        favs: {
            flights: [],
            hotels: [],
        },
        cards: [],
    });

    const [recentSearches, setRecentSearches] = useState({
        flights: [],
        hotels: [
            {
                destination: "Paris",
                checkIn: "11.07.2023",
                checkOut: "13.07.2023",
                allDates: [
                    "11.07.2023",
                    "12.07.2023"
                ],
                rooms: 1,
                guests: 1
            },
            {
                destination: "London",
                checkIn: "11.07.2023",
                checkOut: "13.07.2023",
                allDates: [
                    "11.07.2023",
                    "12.07.2023"
                ],
                rooms: 1,
                guests: 1
            },
            {
                destination: "Tokyo",
                checkIn: "11.07.2023",
                checkOut: "13.07.2023",
                allDates: [
                    "11.07.2023",
                    "12.07.2023"
                ],
                rooms: 1,
                guests: 1
            },
            {
                destination: "New York",
                checkIn: "11.07.2023",
                checkOut: "13.07.2023",
                allDates: [
                    "11.07.2023",
                    "12.07.2023"
                ],
                rooms: 1,
                guests: 1
            }
        ],
    });

    const [userAuth, setUserAuth] = useState(false);

    const [selectedFlight, setSelectedFlight] = useState('');
    const [selectedHotel, setSelectedHotel] = useState('');

    const [activeTabs, setActiveTabs] = useState({
        searchForm: 'flights',
        accountTabs: 'main',
        accountTabsBookings: 'flights',
        accountTabsFav: 'flights',
    });

    const accountTabsRef = useRef(null);

    useEffect(() => {
        if (hotelSearchParams.destination !== '' &&
            hotelSearchParams.checkIn !== '' &&
            hotelSearchParams.checkOut !== ''
        ) {
            const newRecentHotelSearches = [...recentSearches['hotels']]
            newRecentHotelSearches.unshift(hotelSearchParams)
            newRecentHotelSearches.splice(4)

            setRecentSearches({
                ...recentSearches,
                hotels: newRecentHotelSearches
            });
        };
    }, [hotelSearchParams])

    return (
        <AppContext.Provider value={{
            flights,
            hotels,
            airlines,
            reviews,
            users,
            flightSearchParams, setFlightSearchParams,
            hotelSearchParams, setHotelSearchParams,
            user, setUser,
            userAuth, setUserAuth,
            activeTabs, setActiveTabs,
            accountTabsRef,
            selectedFlight, setSelectedFlight,
            selectedHotel, setSelectedHotel,
            recentSearches, setRecentSearches,
        }}>
            <div className="App">
                {/* <Test /> */}
                <Router>
                    <ScrollToTop />
                    <SVG />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/flight-search" element={<FlightSearch />}></Route>
                        <Route path="/flight-listing" element={<FlightListing />}></Route>
                        {/* <Route path="/flight-details/:directID/:returnID?" element={<FlightDetails />}></Route> */}
                        <Route path="/flight-details" element={<FlightDetails />}></Route>
                        {/* <Route path="/flight-booking/:directID/:returnID?" element={<FlightBooking />}></Route> */}
                        <Route path="/flight-booking" element={<FlightBooking />}></Route>
                        <Route path="/hotel-search" element={<HotelSearch />}></Route>
                        <Route path="/hotel-listing" element={<HotelListing />}></Route>
                        {/* <Route path="/hotel-details/:hotelID" element={<HotelDetails />}></Route> */}
                        <Route path="/hotel-details" element={<HotelDetails />}></Route>
                        {/* <Route path="/hotel-booking/:hotelID/:roomID" element={<HotelBooking />}></Route> */}
                        <Route path="/hotel-booking" element={<HotelBooking />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/sign-up" element={<SignUp />}></Route>
                        <Route path="/set-password" element={<SetPassword />}></Route>
                        <Route path="/reset-password" element={<ResetPassword />}></Route>
                        <Route path="/verify-code" element={<VerifyCode />}></Route>
                        <Route path="/account" element={<Account />}></Route>
                    </Routes>
                </Router>
            </div>
        </AppContext.Provider>
    );
}

export default App;
