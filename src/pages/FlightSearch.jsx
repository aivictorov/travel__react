import FallIntoTravel from "../components/sections/FallIntoTravel/FallIntoTravel";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import LastMinuteTours from "../components/sections/LastMinuteTours/LastMinuteTours";
import PlacesOnMap from "../components/sections/PlacesOnMap/PlacesOnMap";
import SliderInnerFlights from "../components/sections/SliderInner/SliderInnerFlights";

const FlightSearch = () => {
    return (
        <>
            <HeaderInner />
            <main>
                <SliderInnerFlights />
                <PlacesOnMap />
                <FallIntoTravel />
                <LastMinuteTours />
            </main>
            <Footer />
        </>
    );
}

export default FlightSearch;