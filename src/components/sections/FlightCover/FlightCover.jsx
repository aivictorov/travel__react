import './FlightCover.scss';
import cover from './../../../img/flights/details-header.jpg'

const FlightCover = () => {
    return (
        <div className="flight-cover">
            <img
                src={cover}
                alt="Emirates A380 Airbus"
            />
        </div>
    );
}

export default FlightCover;