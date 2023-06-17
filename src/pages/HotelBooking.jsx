import { useContext } from "react";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import HotelReservation from './../components/cards/HotelReservation/HotelReservation';
import TrackNav from './../components/blocks/TrackNav/TrackNav';
import { AppContext } from './../App';
import BookingPaymentCards from './../components/blocks/BookingPaymentCards/BookingPaymentCards';
import BookingLogin from './../components/blocks/BookingLogin/BookingLogin';
import BookingPayment from './../components/blocks/BookingPayment/BookingPayment';
import BookingSummary from './../components/blocks/BookingSummary/BookingSummary';

const HotelBooking = () => {
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
                            <HotelReservation />
                            <BookingPayment />
                            {!userAuth ? <BookingLogin /> : <BookingPaymentCards />}
                        </div>
                        <div className="booking__right">
                            <BookingSummary
                                title="Superior room - 1 double bed or 2 twin beds"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default HotelBooking;