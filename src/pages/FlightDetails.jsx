import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import FlightFeatures from "../components/sections/FlightFeatures/FlightFeatures";
import FlightPolicies from './../components/sections/FlightPolicies/FlightPolicies';
import DetailsHeader from "../components/blocks/DetailsHeader/DetailsHeader";
import TrackNav from './../components/blocks/TrackNav/TrackNav';
import FlightTicket from './../components/cards/FlightTicket/FlightTicket';
import FlightCover from './../components/sections/FlightCover/FlightCover';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from './../App';
import { useContext } from 'react';

const FlightDetails = () => {
    const navigate = useNavigate();

    const { directID, returnID } = useParams();
    const { flights, airlines } = useContext(AppContext);
    const directFlight = flights.find((flight) => flight.id == directID);
    const returnFlight = flights.find((flight) => flight.id == returnID);
    const airline = airlines.find((airline) => airline.name == directFlight.airline);

    return (
        <>
            <HeaderInner />
            <main className="details">
                <div className="container">
                    <div className="details__nav">
                        <TrackNav />
                    </div>
                    <div className="details__header">
                        <DetailsHeader
                            action={() => {
                                if (returnID) {
                                    navigate(`/flight-booking/${directID}/${returnID}`)
                                } else {
                                    navigate(`/flight-booking/${directID}`)
                                }
                            }}
                        />
                    </div>
                    <div className="details__flight-content">
                        <FlightCover cover={airline.cover} />
                        <FlightFeatures gallery={airline.gallery} />
                        <FlightPolicies />
                        <FlightTicket flight={directFlight} direction="Direct"/>
                        {returnID &&
                            <FlightTicket flight={returnFlight} direction="Return"/>
                        }
                    </div>
                    <div className="details__hotel-content"></div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default FlightDetails;