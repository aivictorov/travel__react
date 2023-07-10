import FallIntoTravel from './../components/sections/FallIntoTravel/FallIntoTravel';
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from './../components/sections/HeaderInner/HeaderInner';
import LastMinuteTours from './../components/sections/LastMinuteTours/LastMinuteTours';
import RecentSearches from "../components/sections/RecentSearches/RecentSearches";
import SliderInnerHotels from '../components/sections/SliderInner/SliderInnerHotels';

const HotelSearch = () => {
    return (
        <>
            <HeaderInner />
            <main>
                <SliderInnerHotels />
                <RecentSearches layout='hotels'/>
                <FallIntoTravel layout='hotels' />
                <LastMinuteTours  layout='hotels' />
            </main>
            <Footer />
        </>
    );
}

export default HotelSearch;