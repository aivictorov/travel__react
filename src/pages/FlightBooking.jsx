import { useContext, useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import { AppContext } from './../App';
import BookingLogin from "../components/blocks/BookingLogin/BookingLogin";
import BookingPaymentCards from './../components/blocks/BookingPaymentCards/BookingPaymentCards';
import BookingPaymentMethods from './../components/blocks/BookingPaymentMethods/BookingPaymentMethods';
import BookingSummary from "../components/blocks/BookingSummary/BookingSummary";
import Button from './../components/elements/Button/Button';
import DefaultModal from './../components/modals/DefaultModal/DefaultModal';
import Footer from './../components/sections/Footer/Footer';
import FlightBookingCard from './../components/cards/FlightBookingCard/FlightBookingCard';
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import TrackNav from "../components/blocks/TrackNav/TrackNav";

const FlightBooking = () => {
    const { flights, user, setUser, userAuth, selectedFlight, accountTabsRef, setActiveTabs, activeTabs } = useContext(AppContext);

    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);

    if (selectedFlight) {
        const directFlight = flights.find((flight) => flight.id === selectedFlight.direct);
        const returnFlight = flights.find((flight) => flight.id === selectedFlight.return);

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
                            <TrackNav layout="flights" />
                        </div>
                        <div className="booking__row">
                            <div className="booking__left">
                                <FlightBookingCard layout="booking" flight={directFlight} direction="Direct" />
                                {selectedFlight.return &&
                                    <FlightBookingCard layout="booking" flight={returnFlight} direction="Return" />
                                }
                                <BookingPaymentMethods />
                                {!userAuth ? <BookingLogin /> : <BookingPaymentCards />}
                            </div>
                            <div className="booking__right">
                                <BookingSummary
                                    layout='flight'
                                    logo={directFlight.logo}
                                    rating={directFlight.rating}
                                />

                                <Button
                                    text="BOOK FLIGHT"
                                    classes="bold"
                                    action={() => {

                                        if (userAuth) {
                                            addBookedFlight();
                                            setActiveTabs({ ...activeTabs, accountTabs: 'bookings', accountTabsBookings: 'flights' });
                                            navigateToAccountAndScroll();
                                        } else {
                                            setOpenModal(true)
                                        }
                                    }}
                                />
                                <DefaultModal
                                    isOpen={openModal}
                                    onClose={() => setOpenModal(false)}
                                    title="Warning"
                                    text="Please, login or sign up to be able to make bookings."
                                />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    } else {
        return <Navigate to="/" />;
    };
}

export default FlightBooking;