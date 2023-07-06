import { useContext } from 'react';
import { AppContext } from '../../../App';
import AccountFlightCard from './../../cards/AccountFlightCard/AccountFlightCard';

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
                        layout="favourites"
                        key={item}
                        id={item}
                    />
                )
            })}
        </div>
    );
}

export default AccountTabsFavFlights;