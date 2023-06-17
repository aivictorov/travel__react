import HeaderMain from "../components/sections/HeaderMain/HeaderMain";
import PlanYourTrip from "../components/sections/PlanYourTrip/PlanYourTrip";
import FlightsAndHotels from "../components/sections/FlightsAndHotels/FlightsAndHotels";
import Reviews from "../components/sections/Reviews/Reviews";
import Footer from "../components/sections/Footer/Footer";
import ProjectNav from './../components/modals/ProjectNav/ProjectNav';

const Home = () => {
    return (
        <>
            <ProjectNav />
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