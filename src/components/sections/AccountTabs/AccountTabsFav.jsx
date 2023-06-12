import { useContext } from "react";
import { AppContext } from "../../../App";
import AccountTabsFavFlights from "./AccountTabsFavFlights";
import AccountTabsFavHotels from './AccountTabsFavHotels';

const AccountTabsFav = () => {
    const { activeTabs, setActiveTabs } = useContext(AppContext);

    return (
        <div
            className="account-tabs__content"
            tab-content="favourites"
            tab-group="account"
            tabs="favourites"
        >
            <h2 className="account-tabs__content-title">
                Favourites
            </h2>

            <div className="account-bookings">
                <div className="tabs">
                    <button
                        className={`tabs__item ${activeTabs.accountTabsFav === 'flights' ? 'active' : null}`}
                        type="button"
                        style={{ width: "calc(100% / 2)" }}
                        tab-group="favourites"
                        tab-button="flights"
                        onClick={() => {
                            setActiveTabs({ ...activeTabs, accountTabsFav: 'flights' })
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
                        className={`tabs__item ${activeTabs.accountTabsFav === 'hotels' ? 'active' : null}`}
                        type="button"
                        style={{ width: "calc(100% / 2)" }}
                        tab-group="favourites"
                        tab-button="hotels"
                        onClick={() => {
                            setActiveTabs({ ...activeTabs, accountTabsFav: 'hotels' })
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
                {activeTabs.accountTabsFav === 'flights' && <AccountTabsFavFlights />}
                {activeTabs.accountTabsFav === 'hotels' && <AccountTabsFavHotels />}
            </div>
        </div>
    );
}

export default AccountTabsFav;