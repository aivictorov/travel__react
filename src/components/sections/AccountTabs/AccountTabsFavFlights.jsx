import AccountTabsFavFlightsCard from './AccountTabsFavFlightsCard';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import AccountFlightCard from './../../blocks/AccountFlightCard/AccountFlightCard';

const AccountTabsFavFlights = () => {
    const { userData } = useContext(AppContext);

    return (
        <div
            className="account-bookings__content"
            tab-content="flights"
            tab-group="favourites"
        >
            {userData.map((item) => {
                return (
                    <AccountFlightCard
                        key={item}
                        id={item}
                        layout="favourites"
                    />
                )
            })}
        </div>
    );
}

export default AccountTabsFavFlights;