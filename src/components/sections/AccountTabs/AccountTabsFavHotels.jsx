// import AccountHotelCard from './../../cards/AccountHotelCard/AccountHotelCard';
import { useContext } from 'react';
import { AppContext } from './../../../App';
import HotelListingCard from '../../cards/HotelListingCard/HotelListingCard';

const AccountTabsFavHotels = () => {
    const { user } = useContext(AppContext);

    return (
        <div
            className="account-bookings__content"
            tab-content="hotels"
            tab-group="favourites"
        >
            {user.favs.hotels.map((hotel, index) => {
                return <HotelListingCard key={index} hotel={hotel} />
            })}
        </div>
    );
}

export default AccountTabsFavHotels;