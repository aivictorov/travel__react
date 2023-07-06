import AccountHotelCard from './../../cards/AccountHotelCard/AccountHotelCard';

const AccountTabsFavHotels = () => {
    return (
        <div
            className="account-bookings__content"
            tab-content="hotels"
            tab-group="favourites"
        >
            <AccountHotelCard />
            <AccountHotelCard />
        </div>
    );
}

export default AccountTabsFavHotels;