import './RecentSearchesCard.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './../../../App';
import destinations from './../../../data/destinations';
import { dateStringToObject, formatWeekDay } from '../../../utils/dateTimeFunctions';

const RecentSearchesCard = ({ layout, searchParams }) => {
    const { setHotelSearchParams, setFlightSearchParams } = useContext(AppContext);

    let destination, from;

    if (layout == 'hotels') {
        destination = destinations.find((item) => item.city === searchParams.destination);
    }

    if (layout == 'flights') {
        from = destinations.find((item) => item.airport === searchParams.from);
        destination = destinations.find((item) => item.airport === searchParams.to);
    }

    const navigate = useNavigate();

    return (
        <div className="recent-search-card-wrapper">

            {layout == 'hotels' &&
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
                        </div>
                    </div>
                </button>
            }

            {layout == 'flights' &&
                <button
                    className="recent-search-card"
                    onClick={() => {
                        setFlightSearchParams(searchParams);
                        navigate("/flight-listing");
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
                            {`${from.city}, ${from.country}`}
                            {' - '}
                            {`${destination.city}, ${destination.country}`}
                        </div>
                        <div className="recent-search-card__subtitle">
                            {formatWeekDay(dateStringToObject(searchParams.depart))}
                            {' - '}
                            {formatWeekDay(dateStringToObject(searchParams.return))}
                        </div>
                    </div>
                </button>
            }

        </div>
    );
}

export default RecentSearchesCard;