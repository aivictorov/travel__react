import './AccountTabsBookings.scss';
import { useContext } from "react";
import { AppContext } from './../../../App';
import AccountTabsBookingsFlights from "./AccountTabsBookingsFlights";
import AccountTabsBookingsHotels from "./AccountTabsBookingsHotels";
import Tabs from './../../elements/Tabs/Tabs';

const AccountTabsBookings = () => {
    const { activeTabs, setActiveTabs } = useContext(AppContext)

    const tabs = [
        {
            name: 'flights',
            title: 'Flights',
            svgID: 'flight-icon',
            active: activeTabs.accountTabsBookings === 'flights',
            action: () => { setActiveTabs({ ...activeTabs, accountTabsBookings: 'flights' }) },
        },
        {
            name: 'hotels',
            title: 'Stays',
            svgID: 'hotel-icon',
            active: activeTabs.accountTabsBookings === 'hotels',
            action: () => { setActiveTabs({ ...activeTabs, accountTabsBookings: 'hotels' }) },
        },
    ]

    return (
        <div className="account-tabs__content">
            <h2 className="account-tabs__content-title">Tickets/Bookings</h2>
            <div className="account-bookings">
                <Tabs tabs={tabs} />
                {activeTabs.accountTabsBookings === 'flights' && <AccountTabsBookingsFlights />}
                {activeTabs.accountTabsBookings === 'hotels' && <AccountTabsBookingsHotels />} 
            </div>
        </div>
    );
}

export default AccountTabsBookings;