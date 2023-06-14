import Svg from "../helpers/SVG";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import Footer from './../components/sections/Footer/Footer';
import BookingPayment from "../components/blocks/BookingPayment/BookingPayment";
import BookingLogin from "../components/blocks/BookingLogin/BookingLogin";
import BookingSummary from "../components/blocks/BookingSummary/BookingSummary";
import FlightTicket from './../components/blocks/FlightTicket/FlightTicket';
import BookingPaymentCards from './../components/blocks/BookingPaymentCards/BookingPaymentCards';

const FlightBooking = () => {
    return (
        <>
            <HeaderInner />
            <main className="booking">
                <div className="container">
                    <div className="booking__nav">
                        <nav className="track-nav">
                            <a className="track-link" href="#!">
                                Turkey
                            </a>
                            <svg width={16} height={16}>
                                <use href="#arrow-right" />
                            </svg>
                            <a className="track-link" href="#!">
                                Istanbul
                            </a>
                            <svg width={16} height={16}>
                                <use href="#arrow-right" />
                            </svg>
                            <a className="track-link track-link--active" href="#!">
                                CVK Park Bosphorus Hotel Istanbul
                            </a>
                        </nav>
                    </div>
                    <div className="booking__row">
                        <div className="booking__left">
                            <FlightTicket />
                            <BookingPayment />
                            <BookingLogin />
                            <BookingPaymentCards />
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