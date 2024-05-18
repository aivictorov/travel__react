import './RecentSearchesCard.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './../../../App';
import destinations from './../../../data/destinations';
import { dateStringToObject, formatWeekDay } from '../../../utils/dateTimeFunctions';

const RecentSearchesCard = ({ searchParams }) => {
    const { setHotelSearchParams } = useContext(AppContext);
    const destination = destinations.find((item) => item.city === searchParams.destination);
    const navigate = useNavigate();

    return (
        <div className="recent-search-card-wrapper">
            <button
                className="recent-search-card"
                onClick={() => {
                    setHotelSearchParams(searchParams);
                    navigate("/hotel-listing");
                }}
            >
                <div className="recent-search-card__image">
                    <img
                        src={destination.image}
                        alt={`${destination.city}, ${destination.country}`}
                    />
                </div>
                <div className="recent-search-card__content">
                    <div className="recent-search-card__title">
                        {`${destination.city}, ${destination.country}`}
                    </div>
                    <div className="recent-search-card__subtitle">
                        {formatWeekDay(dateStringToObject(searchParams.checkIn))}
                        {' - '}
                        {formatWeekDay(dateStringToObject(searchParams.checkOut))}
                        {/* 325 places */}
                    </div>
                </div>
            </button>
        </div>
    );
}

export default RecentSearchesCard;