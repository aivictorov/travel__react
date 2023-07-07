import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import FlightFeatures from "../components/sections/FlightFeatures/FlightFeatures";
import FlightPolicies from './../components/sections/FlightPolicies/FlightPolicies';
import DetailsHeader from "../components/blocks/DetailsHeader/DetailsHeader";
import TrackNav from './../components/blocks/TrackNav/TrackNav';
import FlightBookingCard from './../components/cards/FlightBookingCard/FlightBookingCard';
import FlightCover from './../components/sections/FlightCover/FlightCover';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from './../App';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const FlightDetails = () => {
    const navigate = useNavigate();
    const { flights, airlines, selectedFlight } = useContext(AppContext);

    if (selectedFlight) {

        // const { directID, returnID } = useParams();
        const directID = selectedFlight.direct;
        const returnID = selectedFlight.return;

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
                            <FlightBookingCard flight={directFlight} direction="Direct" />
                            {returnID &&
                                <FlightBookingCard flight={returnFlight} direction="Return" />
                            }
                        </div>
                        <div className="details__hotel-content"></div>
                    </div>
                </main>
                <Footer />
            </>
        );
    } else {
        return <Navigate to="/" />;
    };

}

export default FlightDetails;