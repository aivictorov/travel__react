import './PlanYourTripCard.scss';

const PlanYourTripCard = ({ title, img }) => {
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
                    <a className="plan-your-trip-card__link" href="#!">
                        Flights
                    </a>
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