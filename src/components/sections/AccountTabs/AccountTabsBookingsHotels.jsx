import AccountTabsBookingHotelsCard from './AccountTabsBookingsHotelsCard';

const AccountTabsBookingsHotels = () => {
    return (
        <div
            className="account-bookings__content"
            tab-content="hotels"
            tab-group="bookings"
        >
            <AccountTabsBookingHotelsCard />
            <AccountTabsBookingHotelsCard />
        </div>
    );
}

export default AccountTabsBookingsHotels;