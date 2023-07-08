import { useContext } from 'react';
import { AppContext } from '../../../App';
import FlightListingCard from './../../cards/FlightListingCard/FlightListingCard';

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
                    <FlightListingCard
                        key={index} flightTicket={flightTicket}
                    />
                )
            })}
        </div>
    );
}

export default AccountTabsFavFlights;