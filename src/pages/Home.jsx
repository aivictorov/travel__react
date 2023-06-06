import Svg from "../helpers/Svg";
import HeaderMain from "../components/sections/HeaderMain/HeaderMain";
import PlanYourTrip from "../components/sections/PlanYourTrip/PlanYourTrip";
import FlightsAndHotels from "../components/sections/FlightsAndHotels/FlightsAndHotels";
import Reviews from "../components/sections/Reviews/Reviews";
import Footer from "../components/sections/Footer/Footer";

const Home = () => {
    return (
        <>
            <Svg />
            <HeaderMain />
            <main>
                <PlanYourTrip />
                <FlightsAndHotels />
                <Reviews />
            </main>
            <Footer />
        </>
    );
}

export default Home;