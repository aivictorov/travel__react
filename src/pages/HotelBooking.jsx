import { useContext } from "react";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import HotelBookingCard from './../components/cards/HotelBookingCard/HotelBookingCard';
import TrackNav from './../components/blocks/TrackNav/TrackNav';
import { AppContext } from './../App';
import BookingPaymentCards from './../components/blocks/BookingPaymentCards/BookingPaymentCards';
import BookingLogin from './../components/blocks/BookingLogin/BookingLogin';
import BookingSummary from './../components/blocks/BookingSummary/BookingSummary';
import { useParams } from 'react-router-dom';
import BookingPaymentMethods from './../components/blocks/BookingPaymentMethods/BookingPaymentMethods';
import Button from "../components/elements/Button/Button";
import { useNavigate } from 'react-router-dom';

const HotelBooking = () => {
    const { userAuth, hotels, selectedHotel, user, setUser, accountTabsRef, activeTabs, setActiveTabs } = useContext(AppContext);

    const navigate= useNavigate();

    const hotelID = selectedHotel.id;
    const roomID = selectedHotel.room;

    const hotel = hotels.find((hotel) => hotel.id == hotelID)
    const room = hotel.rooms.find((room) => room.id == roomID)

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
            {hotelID}
            <br />
            {roomID}
            <br />
            {JSON.stringify(room)}
            <br />

            <HeaderInner />
            <main className="booking">
                <div className="container">
                    <div className="booking__nav">
                        <TrackNav />
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
                                title={room.name}
                                price={room.price}
                                rating={hotel.rating}
                            />
                            <Button
                                text="BOOK HOTEL"
                                style="bold"
                                action={() => {
                                    addBookedHotel();
                                    setActiveTabs({ ...activeTabs, accountTabs: 'bookings', accountTabsBookings: 'hotels' });
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

export default HotelBooking;