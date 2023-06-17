import AccountTabsBookingsFlightsCard from "./AccountTabsBookingsFlightsCard";
import AccountFlightCard from './../../cards/AccountFlightCard/AccountFlightCard';

const AccountTabsBookingsFlights = () => {
    return (
        <div
            className="account-bookings__content"
            tab-content="flights"
            tab-group="bookings"
        >
            <AccountFlightCard layout="bookings" />
            <AccountFlightCard layout="bookings" />
        </div>
    );
}

export default AccountTabsBookingsFlights;