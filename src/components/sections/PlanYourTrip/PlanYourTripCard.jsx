import { useContext } from 'react';
import './PlanYourTripCard.scss';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../App';

const PlanYourTripCard = ({ title, img, from }) => {
    const navigate = useNavigate();
    const { setFlightSearchParams, setHotelSearchParams } = useContext(AppContext);

    return (
        <div className="plan-your-trip-card">
            <div className="plan-your-trip-card__image">
                <img
                    src={img}
                    alt={title}
                />
            </div>
            <div className="plan-your-trip-card__content">
                <div className="plan-your-trip-card__title">
                    {title}
                </div>
                <div className="plan-your-trip-card__links">
                    <button
                        className="plan-your-trip-card__link"
                        type="button"
                        onClick={() => {
                            setFlightSearchParams({ from: from, to: 'All' });
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
                            setHotelSearchParams({ destination: from, });
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
                        Resorts
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlanYourTripCard;