import FlightsAndHotels from "../components/sections/FlightsAndHotels/FlightsAndHotels";
import Footer from "../components/sections/Footer/Footer";
import HeaderMain from "../components/sections/HeaderMain/HeaderMain";
import PlanYourTrip from "../components/sections/PlanYourTrip/PlanYourTrip";
import ProjectNavButton from './../components/modals/ProjectNav/ProjectNavButton';
import Reviews from "../components/sections/Reviews/Reviews";

const Home = () => {
    return (
        <>
            <ProjectNavButton />
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