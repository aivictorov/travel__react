import { AppContext } from './App';
import { useContext } from 'react';

const Test = () => {
    const {
        flights,
        hotels,
        airlines,
        reviews,
        users,
        flightSearchParams, setFlightSearchParams,
        hotelSearchParams, setHotelSearchParams,
        user, setUser,
        userAuth, setUserAuth,
        activeTabs, setActiveTabs,
        accountTabsRef,
        selectedFlight, setSelectedFlight,
        selectedHotel, setSelectedHotel,
        recentSearches, setRecentSearches,
    } = useContext(AppContext)

    return (
        <>
            {/* <p>Flight Search Params</p>
            {JSON.stringify(flightSearchParams)}
            <br /><br /> */}

            {/* <p>Hotel Search Params</p>
            {JSON.stringify(hotelSearchParams)}
            <br /><br /> */}

            <p>User</p>
            {JSON.stringify(user)}
            {/* <br />
            {userAuth.toString()} */}
            <br /><br />

            <p>Selected flight & hotel</p>
            {JSON.stringify(recentSearches)}
            <br />
            {JSON.stringify(selectedFlight)}
            <br />
            {JSON.stringify(selectedHotel)}
            <br /><br />    

            {/* <p>Recent searches</p>
            {JSON.stringify(recentSearches)}
            <br /><br /> */}

            {/* <p>Active tabs</p>
            {JSON.stringify(activeTabs)}
            <br /><br /> */}
        </>
    );
}

export default Test;