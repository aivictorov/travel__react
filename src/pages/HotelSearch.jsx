import HeaderInner from './../components/sections/HeaderInner/HeaderInner';
import SliderInner from "../components/sections/SliderInner/SliderInner";
import RecentSearches from "../components/sections/RecentSearches/RecentSearches";
import FallIntoTravel from './../components/sections/FallIntoTravel/FallIntoTravel';
import LastMinuteTours from './../components/sections/LastMinuteTours/LastMinuteTours';
import Footer from "../components/sections/Footer/Footer";
import bgImg from './../img/hotels/header.jpg';

const HotelSearch = () => {
    return (
        <>
            <HeaderInner />
            <main>
                <SliderInner bgImg={bgImg} />
                <RecentSearches />
                <FallIntoTravel />
                <LastMinuteTours />
            </main>
            <Footer />
        </>
    );
}

export default HotelSearch;