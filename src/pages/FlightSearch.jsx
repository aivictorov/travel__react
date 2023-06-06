import FallIntoTravel from "../components/sections/FallIntoTravel/FallIntoTravel";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import LastMinuteTours from "../components/sections/LastMinuteTours/LastMinuteTours";
import PlacesOnMap from "../components/sections/PlacesOnMap/PlacesOnMap";
import SliderInner from './../components/sections/SliderInner/SliderInner';
import bgImg from './../img/flights/header.jpg';

const FlightSearch = () => {
    return (
        <>
            <HeaderInner />
            <main>
                <SliderInner bgImg={bgImg} />
                <PlacesOnMap />
                <FallIntoTravel />
                <LastMinuteTours />
            </main>
            <Footer />
        </>
    );
}

export default FlightSearch;