import { useContext } from 'react';
import './PlanYourTripCard.scss';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../App';
import destinations from './../../../data/destinations';
import { buildDatesArray, daysFromToday, formatDate } from '../../../utils/dateTimeFunctions';


const PlanYourTripCard = ({ destination }) => {
    const navigate = useNavigate();
    const { flightSearchParams, setFlightSearchParams, hotelSearchParams, setHotelSearchParams } = useContext(AppContext);

    return (
        <div className="plan-your-trip-card">
            <div className="plan-your-trip-card__image">
                <img
                    src={destination.image}
                    alt={`${destination.city}, ${destination.country}`}
                />
            </div>
            <div className="plan-your-trip-card__content">
                <div className="plan-your-trip-card__title">
                    {`${destination.city}, ${destination.country}`}
                </div>
                <div className="plan-your-trip-card__links">
                    <button
                        className="plan-your-trip-card__link"
                        type="button"
                        onClick={() => {
                            setFlightSearchParams({
                                ...flightSearchParams,
                                from: destinations[0].airport,
                                to: destination.airport,
                                depart: formatDate(daysFromToday(1)),
                                return: formatDate(daysFromToday(3)),
                                passangers: 1,
                                class: "economy"
                            });
                            navigate("/flight-listing");
                        }}
                    >
                        Flights
                    </button>
                    •
                    <button
                        className="plan-your-trip-card__link"
                        type="button"
                        onClick={() => {
                            setHotelSearchParams({
                                ...hotelSearchParams,
                                destination: destination.city,
                                checkIn: formatDate(daysFromToday(1)),
                                checkOut: formatDate(daysFromToday(3)),
                                allDates: buildDatesArray([daysFromToday(1), daysFromToday(3)]),
                                rooms: 1,
                                guests: 1
                            });
                            navigate("/hotel-listing");
                        }}
                    >
                        Hotels
                    </button>
                    •
                    <button
                        className="plan-your-trip-card__link"
                        type="button"
                    >
                        Cars
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlanYourTripCard;