import AccountHotelCard from './../../cards/AccountHotelCard/AccountHotelCard';

const AccountTabsBookingsHotels = () => {
    return (
        <div
            className="account-bookings__content"
            tab-content="hotels"
            tab-group="bookings"
        >
            <AccountHotelCard />
            <AccountHotelCard />
        </div>
    );
}

export default AccountTabsBookingsHotels;