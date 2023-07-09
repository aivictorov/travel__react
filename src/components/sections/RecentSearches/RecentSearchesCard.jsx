import './RecentSearchesCard.scss';
import destinations from './../../../data/destinations';
import { dateStringToObject, formatWeekDay } from '../../../utils/dateTimeFunctions';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './../../../App';

const RecentSearchesCard = ({ searchParams }) => {
    const { setHotelSearchParams } = useContext(AppContext);
    const destination = destinations.find((item) => item.city === searchParams.destination);
    const navigate = useNavigate();

    return (
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
    );
}

export default RecentSearchesCard;