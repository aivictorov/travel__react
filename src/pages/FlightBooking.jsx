import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import Footer from './../components/sections/Footer/Footer';
import BookingLogin from "../components/blocks/BookingLogin/BookingLogin";
import BookingSummary from "../components/blocks/BookingSummary/BookingSummary";
import FlightBookingCard from './../components/cards/FlightBookingCard/FlightBookingCard';
import BookingPaymentCards from './../components/blocks/BookingPaymentCards/BookingPaymentCards';
import TrackNav from "../components/blocks/TrackNav/TrackNav";
import { useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BookingPaymentMethods from './../components/blocks/BookingPaymentMethods/BookingPaymentMethods';
import Button from './../components/elements/Button/Button';
import { AppContext } from './../App';

const FlightBooking = () => {
    const { flights, airlines, userAuth, selectedFlight, accountTabsRef, setActiveTabs, activeTabs } = useContext(AppContext);

    const directID = selectedFlight.direct;
    const returnID = selectedFlight.return;

    const navigate = useNavigate();

    const directFlight = flights.find((flight) => flight.id == directID);
    const returnFlight = flights.find((flight) => flight.id == returnID);
    const airline = airlines.find((airline) => airline.name == directFlight.airline);

    const { user, setUser } = useContext(AppContext)

    function addBookedFlight() {
        setUser({
            ...user,
            bookings: {
                ...user.bookings,
                flights: [
                    selectedFlight,
                    ...user.bookings.flights
                ],
            }
        })
    };

    function scrollToRef(ref) {
        ref.current.scrollIntoView({ block: 'start' });
    };

    function navigateToAccountAndScroll() {
        navigate('/account');
        setTimeout(() => { scrollToRef(accountTabsRef) }, 500);
    };

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
                            <FlightBookingCard layout="booking" flight={directFlight} direction="Direct" />
                            {returnID &&
                                <FlightBookingCard layout="booking" flight={returnFlight} direction="Return" />
                            }
                            <BookingPaymentMethods />
                            {!userAuth ? <BookingLogin /> : <BookingPaymentCards />}
                        </div>
                        <div className="booking__right">
                            <BookingSummary logo={directFlight.logo} rating={directFlight.rating} />

                            <Button
                                text="BOOK FLIGHT"
                                style="bold"
                                action={() => {
                                    addBookedFlight();
                                    setActiveTabs({ ...activeTabs, accountTabs: 'bookings', accountTabsBookings: 'flights' });
                                    navigateToAccountAndScroll();
                                }}
                            />

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default FlightBooking;