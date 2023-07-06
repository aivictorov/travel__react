import { useContext } from 'react';
import { AppContext } from '../../../App';
import FavFlightCard from './../../cards/FavFlightCard/FavFlightCard';

const AccountTabsFavFlights = () => {
    const { user } = useContext(AppContext);

    console.log(user);

    return (
        <div
            className="account-bookings__content"
            tab-content="flights"
            tab-group="favourites"
        >
            {user.favs.flights.map((item, index) => {
                return (
                    <FavFlightCard key={index} ticket={[1, 2]}/>
                )
            })}
        </div>
    );
}

export default AccountTabsFavFlights;