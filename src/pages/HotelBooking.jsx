import { useContext, useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import { AppContext } from './../App';
import BookingLogin from './../components/blocks/BookingLogin/BookingLogin';
import BookingPaymentCards from './../components/blocks/BookingPaymentCards/BookingPaymentCards';
import BookingPaymentMethods from './../components/blocks/BookingPaymentMethods/BookingPaymentMethods';
import BookingSummary from './../components/blocks/BookingSummary/BookingSummary';
import Button from "../components/elements/Button/Button";
import DefaultModal from './../components/modals/DefaultModal/DefaultModal';
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import HotelBookingCard from './../components/cards/HotelBookingCard/HotelBookingCard';
import TrackNav from './../components/blocks/TrackNav/TrackNav';
import { findHotel, findRoom } from "../utils/searchFunctions";

const HotelBooking = () => {
    const { userAuth, selectedHotel, user, setUser, accountTabsRef, activeTabs, setActiveTabs } = useContext(AppContext);

    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);

    if (selectedHotel) {
        const hotel = findHotel(selectedHotel.id)
        const room = findRoom(hotel, selectedHotel.room)

        function addBookedHotel() {
            setUser({
                ...user,
                bookings: {
                    ...user.bookings,
                    hotels: [
                        selectedHotel,
                        ...user.bookings.hotels
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
                            <TrackNav layout="hotels" />
                        </div>
                        <div className="booking__row">
                            <div className="booking__left">
                                <HotelBookingCard
                                    hotel={hotel.name}
                                    room={room.name}
                                    price={room.price}
                                />
                                <BookingPaymentMethods />
                                {!userAuth ? <BookingLogin /> : <BookingPaymentCards />}
                            </div>
                            <div className="booking__right">
                                <BookingSummary
                                    layout='hotel'
                                    title={room.name}
                                    price={room.price}
                                    rating={hotel.rating}
                                />
                                <Button
                                    text="BOOK HOTEL"
                                    style="bold"
                                    action={() => {
                                        if (userAuth) {
                                            addBookedHotel();
                                            setActiveTabs({ ...activeTabs, accountTabs: 'bookings', accountTabsBookings: 'hotels' });
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

export default HotelBooking;