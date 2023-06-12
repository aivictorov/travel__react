import { useContext } from 'react';
import './PlanYourTripCard.scss';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../App';

const PlanYourTripCard = ({ title, img, from }) => {
    const navigate = useNavigate();
    const { setSearchParams } = useContext(AppContext)

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
                            setSearchParams({ from: from, to: 'All' });
                            navigate("/flight-listing");
                        }}
                    >
                        Flights
                    </button>
                    •
                    <a className="plan-your-trip-card__link" href="#!">
                        Hotels
                    </a>
                    •
                    <a className="plan-your-trip-card__link" href="#!">
                        Resorts
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PlanYourTripCard;