import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import FlightFeatures from "../components/sections/FlightFeatures/FlightFeatures";
import FlightPolicies from './../components/sections/FlightPolicies/FlightPolicies';
import DetailsHeader from "../components/blocks/DetailsHeader/DetailsHeader";
import TrackNav from './../components/blocks/TrackNav/TrackNav';
import FlightTicket from './../components/blocks/FlightTicket/FlightTicket';

const FlightDetails = () => {

    return (
        <>
            <HeaderInner />
            <main className="details">
                <div className="container">
                    <div className="details__nav">
                        <TrackNav />
                    </div>
                    <div className="details__header">
                        <DetailsHeader />
                    </div>
                    <div className="details__flight-content">
                        <FlightFeatures />
                        <FlightPolicies />
                        <FlightTicket />
                        <FlightTicket />
                    </div>
                    <div className="details__hotel-content"></div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default FlightDetails;