import './FlightsAndHotelsCard.scss';

const FlightsAndHotelsCard = ({ title, description, btnText, style }) => {
    return (
        <div className={`flights-and-hotels-card flights-and-hotels-card--${style}`}>
            <div className="flights-and-hotels-card__title">{title}</div>
            <div className="flights-and-hotels-card__text">
                {description}
            </div>
            <div className="flights-and-hotels-card__button">
                <button className="button" type="button">
                    {btnText}
                </button>
            </div>
        </div>
    );
}

export default FlightsAndHotelsCard;