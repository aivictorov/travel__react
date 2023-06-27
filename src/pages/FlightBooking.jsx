import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import Footer from './../components/sections/Footer/Footer';
import BookingLogin from "../components/blocks/BookingLogin/BookingLogin";
import BookingSummary from "../components/blocks/BookingSummary/BookingSummary";
import FlightTicket from './../components/cards/FlightTicket/FlightTicket';
import BookingPaymentCards from './../components/blocks/BookingPaymentCards/BookingPaymentCards';
import TrackNav from "../components/blocks/TrackNav/TrackNav";
import { useContext } from "react";
import { AppContext } from "../App";
import { useParams } from 'react-router-dom';
import BookingPaymentMethods from './../components/blocks/BookingPaymentMethods/BookingPaymentMethods';

const FlightBooking = () => {
    const { directID, returnID } = useParams();
    const { flights, airlines, userAuth } = useContext(AppContext);
    const directFlight = flights.find((flight) => flight.id == directID);
    const returnFlight = flights.find((flight) => flight.id == returnID);
    const airline = airlines.find((airline) => airline.name == directFlight.airline);

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
                            <FlightTicket layout="booking" flight={directFlight} direction="Direct" />
                            {returnID &&
                                <FlightTicket layout="booking" flight={returnFlight} direction="Return" />
                            }
                            <BookingPaymentMethods />
                            {!userAuth ? <BookingLogin /> : <BookingPaymentCards />}
                        </div>
                        <div className="booking__right">
                            <BookingSummary logo={directFlight.logo} rating={directFlight.rating} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default FlightBooking;