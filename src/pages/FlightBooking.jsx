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

const FlightBooking = () => {
    const { userAuth } = useContext(AppContext);

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
                            <FlightTicket layout="booking" />
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