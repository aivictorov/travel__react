import AccountTabsFavouritesFlight from "./AccountTabsFavouritesFlight";
import AccountTabsFavouriteHotel from './AccountTabsFavouriteHotel';

import { useContext } from "react";
import { AppContext } from "../../../App";

const AccountTabsFavourites = () => {
    const { userData } = useContext(AppContext);

    return (
        <div
            className="account-tabs__content none"
            tab-content="favourites"
            tab-group="account"
            tabs="favourites"
        >
            <h2 className="account-tabs__content-title">Favourites</h2>
            <div className="account-bookings">
                <ul className="tabs">
                    <button
                        className="tabs__item active"
                        type="button"
                        style={{ width: "calc(100% / 2)" }}
                        tab-group="favourites"
                        tab-button="flights"
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
                        className="tabs__item"
                        type="button"
                        style={{ width: "calc(100% / 2)" }}
                        tab-group="favourites"
                        tab-button="hotels"
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
                </ul>

                <div
                    className="account-bookings__content"
                    tab-content="flights"
                    tab-group="favourites"
                >
                    {userData.map((item) => {
                        return (
                            <AccountTabsFavouritesFlight
                                key={item}
                                id={item}
                            />
                        )
                    })}
                </div>
                <div
                    className="account-bookings__content"
                    tab-content="hotels"
                    tab-group="favourites"
                >
                    <AccountTabsFavouriteHotel />
                </div>
            </div>
        </div>
    );
}

export default AccountTabsFavourites;