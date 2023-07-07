import { useContext } from 'react';
import { AppContext } from '../../../App';
import FavFlightCard from './../../cards/FavFlightCard/FavFlightCard';

const AccountTabsFavFlights = () => {
    const { user } = useContext(AppContext);

    return (
        <div
            className="account-bookings__content"
            tab-content="flights"
            tab-group="favourites"
        >
            {user.favs.flights.map((flightTicket, index) => {
                return (
                    <FavFlightCard
                        key={index} flightTicket={flightTicket}
                    />
                )
            })}
        </div>
    );
}

export default AccountTabsFavFlights;