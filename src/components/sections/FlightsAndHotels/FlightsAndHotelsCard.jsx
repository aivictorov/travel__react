import './FlightsAndHotelsCard.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button/Button';

const FlightsAndHotelsCard = ({ title, description, btnText, layout }) => {
    const navigate = useNavigate();

    let link = '/';
    if (layout === 'flights') link += 'flight-search';
    if (layout === 'hotels') link += 'hotel-search';

    return (
        <div className={`flights-and-hotels-card flights-and-hotels-card--${layout}`}>
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