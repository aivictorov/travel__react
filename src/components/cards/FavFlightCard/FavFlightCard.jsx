import './FavFlightCard.scss';
import FavCheckboxButton from '../../elements/FavCheckboxButton/FavCheckboxButton';
import Button from '../../elements/Button/Button';
import Rating from '../../elements/Rating/Rating';
import { useNavigate } from 'react-router-dom';
import Price from '../../elements/Price/Price';
import { countDuration, formatDate, formatTime } from '../../../utils/dateTimeFunctions'
import { findFlight } from '../../../utils/searchFunctions';

const FavFlightCard = ({ flightTicket }) => {
    const navigate = useNavigate();

    const directFlight = findFlight(flightTicket.direct);
    const returnFlight = findFlight(flightTicket.return);

    let flightsArray = [directFlight];
    returnFlight && flightsArray.push(returnFlight);

    function formatString(start, end) {
        let startFormatted = formatTime(start);
        let endFormatted = formatTime(end);
        let nextDay = '';
        if (end.getDate() > start.getDate()) nextDay = ' (+1)'
        const resultString = `${startFormatted} - ${endFormatted}${nextDay}`
        return resultString;
    };

    return (
        <div className="flight-card">
            <div className="flight-card__image">
                <img
                    src={directFlight.logo}
                    alt={flightTicket.airline}
                />
            </div>
            <div className="flight-card__content">
                <div className="flight-card__header">
                    <Rating value={flightTicket.rating} />
                    <Price value={flightTicket.price} before="starting from" />
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
                                                {formatString(directFlight.start, directFlight.end)}
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
                                            <div className="flight__duration">{countDuration(directFlight.start, directFlight.end)}</div>
                                            <div className="flight__codes">EWR-BNA</div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </li>

                    {returnFlight.length !== 0 &&
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
                                                    {formatString(returnFlight.start, returnFlight.end)}
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
                    <FavCheckboxButton
                        flightTicket={flightTicket}
                    />
                    <div className="flight-card__button-wrapper">
                        <Button
                            text="View Details"
                            style="bold w100"
                            action={() => {
                                if (flightsArray.length === 1) {
                                    navigate(`/flight-details/${flightsArray[0]}`)
                                } else if (flightsArray.length === 2) {
                                    navigate(`/flight-details/${flightsArray[0]}/${flightsArray[1]}`)
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavFlightCard;