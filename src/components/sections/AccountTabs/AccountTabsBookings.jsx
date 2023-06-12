import { useContext } from "react";
import { AppContext } from './../../../App';
import AccountTabsBookingsFlights from "./AccountTabsBookingsFlights";
import AccountTabsBookingsHotels from "./AccountTabsBookingsHotels";

const AccountTabsBookings = () => {
    const { activeTabs, setActiveTabs } = useContext(AppContext)

    return (
        <div
            className="account-tabs__content"
            tab-content="bookings"
            tab-group="account"
            tabs="bookings"
        >
            <h2 className="account-tabs__content-title">Tickets/Bookings</h2>
            <div className="account-bookings">
                <div className="tabs">
                    <button
                        className={`tabs__item ${activeTabs.accountTabsBookings === 'flights' ? 'active' : null}`}
                        type="button"
                        style={{ width: "calc(100% / 2)" }}
                        tab-group="bookings"
                        tab-button="flights"
                        onClick={() => {
                            setActiveTabs({ ...activeTabs, accountTabsBookings: 'flights' })
                        }}
                    >
                        <div className="tabs__item-icon">
                            <svg width={24} height={24}>
                                <use href="#flight-icon" />
                            </svg>
                        </div>
                        <div className="tabs__item-content">
                            <div className="tabs__item-title">Flights</div>
                        </div>
                    </button>
                    <button
                        className={`tabs__item ${activeTabs.accountTabsBookings === 'hotels' ? 'active' : null}`}
                        type="button"
                        style={{ width: "calc(100% / 2)" }}
                        tab-group="bookings"
                        tab-button="hotels"
                        onClick={() => {
                            setActiveTabs({ ...activeTabs, accountTabsBookings: 'hotels' })
                        }}
                    >
                        <div className="tabs__item-icon">
                            <svg width={24} height={24}>
                                <use href="#hotel-icon" />
                            </svg>
                        </div>
                        <div className="tabs__item-content">
                            <div className="tabs__item-title">Stays</div>
                        </div>
                    </button>
                </div>

                {activeTabs.accountTabsBookings === 'flights' && <AccountTabsBookingsFlights />}
                {activeTabs.accountTabsBookings === 'hotels' && <AccountTabsBookingsHotels />}
            </div>
        </div>
    );
}

export default AccountTabsBookings;