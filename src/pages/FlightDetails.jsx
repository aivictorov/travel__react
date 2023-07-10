import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from './../App';
import DetailsHeader from "../components/blocks/DetailsHeader/DetailsHeader";
import FlightBookingCard from './../components/cards/FlightBookingCard/FlightBookingCard';
import FlightCover from './../components/sections/FlightCover/FlightCover';
import FlightFeatures from "../components/sections/FlightFeatures/FlightFeatures";
import FlightPolicies from './../components/sections/FlightPolicies/FlightPolicies';
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import TrackNav from './../components/blocks/TrackNav/TrackNav';

const FlightDetails = () => {
    const { flights, airlines, selectedFlight } = useContext(AppContext);

    if (selectedFlight) {
        const directFlight = flights.find((flight) => flight.id === selectedFlight.direct);
        const returnFlight = flights.find((flight) => flight.id === selectedFlight.return);
        const airline = airlines.find((airline) => airline.name == directFlight.airline);

        return (
            <>
                <HeaderInner />
                <main className="details">
                    <div className="container">
                        <div className="details__nav">
                            <TrackNav layout="flights" />
                        </div>
                        <div className="details__header">
                            <DetailsHeader
                                layout="flight"
                            />
                        </div>
                        <div className="details__flight-content">
                            <FlightCover cover={airline.cover} />
                            <FlightFeatures gallery={airline.gallery} />
                            <FlightPolicies />
                            <FlightBookingCard flight={directFlight} direction="Direct" />
                            {selectedFlight.return &&
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