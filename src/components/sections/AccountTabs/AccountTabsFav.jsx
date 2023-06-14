import { useContext } from "react";
import { AppContext } from "../../../App";
import AccountTabsFavFlights from "./AccountTabsFavFlights";
import AccountTabsFavHotels from './AccountTabsFavHotels';
import Tabs from './../../elements/Tabs/Tabs';

const AccountTabsFav = () => {
    const { activeTabs, setActiveTabs } = useContext(AppContext);

    const tabs = [
        {
            name: 'flights',
            title: 'Flights',
            svgID: 'flight-icon',
            active: activeTabs.accountTabsFav === 'flights',
            action: () => { setActiveTabs({ ...activeTabs, accountTabsFav: 'flights' }) },
        },
        {
            name: 'hotels',
            title: 'Stays',
            svgID: 'hotel-icon',
            active: activeTabs.accountTabsFav === 'hotels',
            action: () => { setActiveTabs({ ...activeTabs, accountTabsFav: 'hotels' }) },
        },
    ]

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
                <Tabs tabs={tabs} />
                {activeTabs.accountTabsFav === 'flights' && <AccountTabsFavFlights />}
                {activeTabs.accountTabsFav === 'hotels' && <AccountTabsFavHotels />}
            </div>
        </div>
    );
}

export default AccountTabsFav;