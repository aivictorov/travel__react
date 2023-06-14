import AccountTabsBookingsFlightsCard from "./AccountTabsBookingsFlightsCard";

const AccountTabsBookingsFlights = () => {
    return (
        <div
            className="account-bookings__content"
            tab-content="flights"
            tab-group="bookings"
        >
            <AccountTabsBookingsFlightsCard />
            <AccountTabsBookingsFlightsCard />
        </div>
    );
}

export default AccountTabsBookingsFlights;