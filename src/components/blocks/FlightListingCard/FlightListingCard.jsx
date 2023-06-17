import './FlightListingCard.scss';
import FavCheckboxButton from '../../elements/FavCheckboxButton/FavCheckboxButton';
import Button from '../../elements/Button/Button';
import Rating from '../../elements/Rating/Rating';
import { useNavigate } from 'react-router-dom';

const FlightListingCard = ({ id, start, end, airline, logo, price, rating }) => {
    const navigate = useNavigate();

    return (
        <div className="flight-card">
            <div className="flight-card__image">
                <img
                    src={logo}
                    alt={airline}
                />
            </div>
            <div className="flight-card__content">
                <div className="flight-card__header">


                    <Rating value={rating} />




                    <div className="flight-card__price">
                        starting from
                        <div className="price">
                            <span className="price-value">{'$' + price}</span>
                        </div>
                    </div>
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
                                                {`${start} - ${end}`}
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
                                                12:00 pm - 01:28 pm
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
                </ul>
                <div className="flight-card__buttons">
                    <FavCheckboxButton id={id} />
                    <div className="flight-card__button-wrapper">
                        <Button
                            text="View Details"
                            style="bold w100"
                            action={() => { navigate(`/flight-details/${id}`) }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightListingCard;