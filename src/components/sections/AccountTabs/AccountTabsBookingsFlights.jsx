import AccountFlightCard from './../../cards/AccountFlightCard/AccountFlightCard';
import { useContext } from 'react';
import { AppContext } from './../../../App';

const AccountTabsBookingsFlights = () => {
    const { user } = useContext(AppContext);

    return (
        <div
            className="account-bookings__content"
            tab-content="flights"
            tab-group="bookings"
        >
            {user.bookings.flights.map((item, index) => {
                return (
                    <AccountFlightCard
                        key={index}
                        flightTicket={item}
                        layout="bookings"
                    />
                );
            })}
        </div>
    );
}

export default AccountTabsBookingsFlights;