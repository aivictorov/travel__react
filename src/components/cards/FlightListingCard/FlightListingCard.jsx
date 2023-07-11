import './FlightListingCard.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './../../../App';
import Button from '../../elements/Button/Button';
import Checkbox from '../../elements/Checkbox/Checkbox';
import FavCheckboxButton from '../../elements/FavCheckboxButton/FavCheckboxButton';
import Price from '../../elements/Price/Price';
import Rating from '../../elements/Rating/Rating';
import { countDuration, formatTime, nextDaySign } from '../../../utils/dateTimeFunctions'
import { findFlight } from '../../../utils/searchFunctions';

const FlightListingCard = ({ flightTicket }) => {
    const { setSelectedFlight, userAuth } = useContext(AppContext);

    const navigate = useNavigate();

    const directFlight = findFlight(flightTicket.direct);
    const returnFlight = findFlight(flightTicket.return);

    let flightsArray = [directFlight];
    returnFlight && flightsArray.push(returnFlight);

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

                    {flightsArray.map((flight, index) => {
                        return (
                            <li className="flight-card__flight" key={index} >
                                <Checkbox
                                    classes="gray"
                                    text={
                                        <>
                                            <div className="flight__row">
                                                <div className="flight__column">
                                                    <div className="flight__shedule">
                                                        {`${formatTime(flight.start)} - ${formatTime(flight.end)} ${nextDaySign(flight.start, flight.end)}`}
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
                                                    <div className="flight__duration">{countDuration(flight.start, flight.end)}</div>
                                                    <div className="flight__codes">EWR-BNA</div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    onChangeFunction={() => { }}
                                />
                            </li>
                        )
                    })}
                </ul>
                <div className="flight-card__buttons">
                    {userAuth && <FavCheckboxButton
                        flightTicket={flightTicket}
                    />}
                    <div className="flight-card__button-wrapper">
                        <Button
                            text="View Details"
                            classes="bold w100"
                            action={() => {
                                setSelectedFlight(flightTicket);
                                navigate('/flight-details');
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightListingCard;