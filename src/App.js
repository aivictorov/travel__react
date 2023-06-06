import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/flight-booking" element={<FlightBooking />}></Route>
                    <Route path="/flight-details" element={<FlightDetails />}></Route>
                    <Route path="/flight-listing" element={<FlightListing />}></Route>
                    <Route path="/flight-search" element={<FlightSearch />}></Route>
                    <Route path="/hotel-booking" element={<HotelBooking />}></Route>
                    <Route path="/hotel-details" element={<HotelDetails />}></Route>
                    <Route path="/hotel-listing" element={<HotelListing />}></Route>
                    <Route path="/hotel-search" element={<HotelSearch />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/sign-up" element={<SignUp />}></Route>
                    <Route path="/set-password" element={<SetPassword />}></Route>
                    <Route path="/reset-password" element={<ResetPassword />}></Route>
                    <Route path="/verify-code" element={<VerifyCode />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
