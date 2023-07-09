import HeaderInner from './../components/sections/HeaderInner/HeaderInner';
import SliderInnerHotels from '../components/sections/SliderInner/SliderInnerHotels';
import RecentSearches from "../components/sections/RecentSearches/RecentSearches";
import FallIntoTravel from './../components/sections/FallIntoTravel/FallIntoTravel';
import LastMinuteTours from './../components/sections/LastMinuteTours/LastMinuteTours';
import Footer from "../components/sections/Footer/Footer";

const HotelSearch = () => {
    return (
        <>
            <HeaderInner />
            <main>
                <SliderInnerHotels />
                <RecentSearches />
                <FallIntoTravel layout='hotels' />
                <LastMinuteTours  layout='hotels' />
            </main>
            <Footer />
        </>
    );
}

export default HotelSearch;