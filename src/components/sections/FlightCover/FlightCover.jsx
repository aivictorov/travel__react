import './FlightCover.scss';

const FlightCover = ({cover}) => {
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