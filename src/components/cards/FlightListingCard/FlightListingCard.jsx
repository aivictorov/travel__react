import './FlightListingCard.scss';
import FavCheckboxButton from '../../elements/FavCheckboxButton/FavCheckboxButton';
import Button from '../../elements/Button/Button';
import Rating from '../../elements/Rating/Rating';
import { useNavigate } from 'react-router-dom';
import Price from '../../elements/Price/Price';

const FlightListingCard = ({ ticket }) => {
    const navigate = useNavigate();

    // const startFormatted = formatDate(start)
    // const endFormatted = formatTime(end)

    function formatDate(date) {
        let day = date.getDate();
        if (day.toString().length === 1) day = '0' + day.toString();
        let month = date.getMonth() + 1;
        if (month.toString().length === 1) month = '0' + month.toString();
        const year = date.getFullYear();
        const dateString = `${day}.${month}.${year}`;
        return dateString;
    }

    function formatTime(date) {
        let hours = date.getHours();
        if (hours.toString().length === 1) hours = '0' + hours.toString();
        let minutes = date.getMinutes();
        if (minutes.toString().length === 1) minutes = '0' + minutes.toString();
        const timeString = `${hours}:${minutes}`;
        return timeString;
    }

    function formatString(start, end) {
        let startFormatted = formatTime(start);
        let endFormatted = formatTime(end);
        let nextDay = '';
        if (end.getDate() > start.getDate()) nextDay = ' (+1)'
        const resultString = `${startFormatted} - ${endFormatted}${nextDay}`
        return resultString;
    };

    function countDuration(start, end) {
        let hours = parseInt((end - start) / 1000 / 60 / 60);
        let minutes = parseInt((end - start) / 1000 / 60 % 60);
        const duration = `${hours}h ${minutes}m`
        return duration;
    };

    return (
        <div className="flight-card">
            {/* {start.toString()} */}
            <div className="flight-card__image">
                <img
                    src={ticket.direct.logo}
                    alt={ticket.airline}
                />
            </div>
            <div className="flight-card__content">
                <div className="flight-card__header">
                    <Rating value={ticket.rating} />
                    <Price value={ticket.price} before="starting from" />
                </div>
                <ul className="flight-card__flights">

                    <li className="flight__row">
                        <div className="checkbox">
                            <label className="checkbox__label checkbox__label--flight-card">
                                <input
                                    className="checkbox__hidden visually-hidden"
                                    type="checkbox"
                                />
                                <div className="checkbox__custom" />
                                <div className="checkbox__value">
                                    <div className="flight__row">
                                        <div className="flight__column">
                                            <div className="flight__shedule">
                                                {formatString(ticket.direct.start, ticket.direct.end)}
                                            </div>
                                            <div className="flight__airline">
                                                Emirates
                                            </div>
                                        </div>
                                        <div className="flight__column">
                                            <div className="flight__transfers">
                                                non stop
                                            </div>
                                        </div>
                                        <div className="flight__column">
                                            <div className="flight__duration">{countDuration(ticket.direct.start, ticket.direct.end)}</div>
                                            <div className="flight__codes">EWR-BNA</div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li>

                    {ticket.return.length !== 0 &&
                        <li className="flight__row">
                            <div className="checkbox">
                                <label className="checkbox__label checkbox__label--flight-card">
                                    <input
                                        className="checkbox__hidden visually-hidden"
                                        type="checkbox"
                                    />
                                    <div className="checkbox__custom" />
                                    <div className="checkbox__value">
                                        <div className="flight__row">
                                            <div className="flight__column">
                                                <div className="flight__shedule">
                                                    {formatString(ticket.return.start, ticket.return.end)}
                                                    {/* 12:00 pm - 01:28 pm */}
                                                </div>
                                                <div className="flight__airline">
                                                    Emirates
                                                </div>
                                            </div>
                                            <div className="flight__column">
                                                <div className="flight__transfers">
                                                    non stop
                                                </div>
                                            </div>
                                            <div className="flight__column">
                                                <div className="flight__duration">2h 28m</div>
                                                <div className="flight__codes">EWR-BNA</div>
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </li>
                    }


                </ul>
                <div className="flight-card__buttons">
                    <FavCheckboxButton id={ticket.direct.id} />
                    <div className="flight-card__button-wrapper">
                        <Button
                            text="View Details"
                            style="bold w100"
                            action={() => { navigate(`/flight-details/${ticket.direct.id}`) }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightListingCard;