import { NavLink } from 'react-router-dom';
import './FlightsAndHotelsCard.scss';

const FlightsAndHotelsCard = ({ title, description, btnText, style }) => {

    let link = '/';
    if (style === 'flights') link += 'flight-search'
    if (style === 'hotels') link += 'hotel-search'

    return (
        <div className={`flights-and-hotels-card flights-and-hotels-card--${style}`}>
            <div className="flights-and-hotels-card__title">{title}</div>
            <div className="flights-and-hotels-card__text">
                {description}
            </div>
            <div className="flights-and-hotels-card__button">
                <NavLink to={link} className="button">
                    {btnText}
                </NavLink>
            </div>
        </div>
    );
}

export default FlightsAndHotelsCard;