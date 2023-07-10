import { useContext } from 'react';
import { AppContext } from './../../../App';
import AccountHotelCard from './../../cards/AccountHotelCard/AccountHotelCard';

const AccountTabsBookingsHotels = () => {
    const { user } = useContext(AppContext);

    return (
        <div
            className="account-bookings__content"
            tab-content="hotels"
            tab-group="bookings"
        >
            {user.bookings.hotels.map((item, index) => {
                return (
                    <AccountHotelCard
                        key={index}
                        hotelBooking={item}
                        layout="bookings"
                    />
                );
            })}
        </div>
    );
}

export default AccountTabsBookingsHotels;