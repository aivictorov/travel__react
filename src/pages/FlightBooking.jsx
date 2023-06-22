import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import Footer from './../components/sections/Footer/Footer';
import BookingPayment from "../components/blocks/BookingPayment/BookingPayment";
import BookingLogin from "../components/blocks/BookingLogin/BookingLogin";
import BookingSummary from "../components/blocks/BookingSummary/BookingSummary";
import FlightTicket from './../components/cards/FlightTicket/FlightTicket';
import BookingPaymentCards from './../components/blocks/BookingPaymentCards/BookingPaymentCards';
import TrackNav from "../components/blocks/TrackNav/TrackNav";
import { useContext } from "react";
import { AppContext } from "../App";
import { useParams } from 'react-router-dom';

const FlightBooking = () => {
    const { userAuth, flights } = useContext(AppContext);
    const { id } = useParams();
    const flight = flights.find((flight) => flight.id == id);

    return (
        <>
            <HeaderInner />
            <main className="booking">
                <div className="container">
                    <div className="booking__nav">
                        <TrackNav />
                    </div>
                    <div className="booking__row">
                        <div className="booking__left">
                            <FlightTicket layout="booking" flight={flight}/>
                            <BookingPayment />
                            {!userAuth ? <BookingLogin /> : <BookingPaymentCards />}
                        </div>
                        <div className="booking__right">
                            <BookingSummary />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default FlightBooking;