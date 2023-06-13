import { NavLink, useNavigate } from 'react-router-dom';
import './FlightsAndHotelsCard.scss';
import Button from '../../elements/Button/Button';

const FlightsAndHotelsCard = ({ title, description, btnText, style }) => {
    const navigate = useNavigate();

    let link = '/';
    if (style === 'flights') link += 'flight-search';
    if (style === 'hotels') link += 'hotel-search';

    return (
        <div className={`flights-and-hotels-card flights-and-hotels-card--${style}`}>
            <div className="flights-and-hotels-card__title">
                {title}
            </div>

            <div className="flights-and-hotels-card__text">
                {description}
            </div>

            <Button text={btnText} type='button' action={() => { navigate(link) }} />
        </div>
    );
}

export default FlightsAndHotelsCard;