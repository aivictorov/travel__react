import AccountHotelCard from './../../cards/AccountHotelCard/AccountHotelCard';
import { AppContext } from './../../../App';
import { useContext } from 'react';

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
                        id={item}
                        layout="bookings"
                    />
                );
            })}
        </div>
    );
}

export default AccountTabsBookingsHotels;