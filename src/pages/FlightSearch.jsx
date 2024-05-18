import FallIntoTravel from "../components/sections/FallIntoTravel/FallIntoTravel";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import LastMinuteTours from "../components/sections/LastMinuteTours/LastMinuteTours";
import PlacesOnMap from "../components/sections/PlacesOnMap/PlacesOnMap";
import SliderInnerFlights from "../components/sections/SliderInner/SliderInnerFlights";
import RecentSearches from './../components/sections/RecentSearches/RecentSearches';

const FlightSearch = () => {
    return (
        <>
            <HeaderInner />
            <main>
                <SliderInnerFlights />
                <RecentSearches layout='flights'/>
                {/* <PlacesOnMap /> */}
                <FallIntoTravel layout='flights' />
                <LastMinuteTours layout='flights' />
            </main>
            <Footer />
        </>
    );
}

export default FlightSearch;