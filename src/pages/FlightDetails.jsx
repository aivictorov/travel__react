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
    const flight = flights.find((flight) => flight.id == directID);

    const airline = airlines.find((airline) => airline.name == flight.airline);

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
                            action={() => { navigate(`/flight-booking/${directID}`) }}
                        />
                    </div>
                    <div className="details__flight-content">
                        <FlightCover cover={airline.cover} />
                        <FlightFeatures gallery={airline.gallery} />
                        <FlightPolicies />
                        <FlightTicket flight={flight} />
                        {returnID &&
                            <FlightTicket flight={flight} />
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