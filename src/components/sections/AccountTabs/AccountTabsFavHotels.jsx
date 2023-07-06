// import AccountHotelCard from './../../cards/AccountHotelCard/AccountHotelCard';
import FavHotelCard from './../../cards/FavHotelCard/FavHotelCard';
import { useContext } from 'react';
import { AppContext } from './../../../App';

const AccountTabsFavHotels = () => {
    const { user } = useContext(AppContext);

    return (
        <div
            className="account-bookings__content"
            tab-content="hotels"
            tab-group="favourites"
        >
            {user.favs.hotels.map((hotel, index) => {
                return <FavHotelCard key={index} />
            })}
        </div>
    );
}

export default AccountTabsFavHotels;