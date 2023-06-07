import './FlightListingCard.scss';

const FlightListingCard = ({ start, end, price }) => {
    return (
        <div className="flight-card">
            <div className="flight-card__image">
                <img
                    src="./img/flights/airline-example-1/logo.png"
                    alt="airline logo"
                />
            </div>
            <div className="flight-card__content">
                <div className="flight-card__header">
                    <div className="flight-card__rating">
                        <div className="rating">
                            <div className="rating__value">4.2</div>
                            <span className="rating__text">
                                <strong>Very good</strong>
                            </span>
                            <a className="rating__link" href="#!">
                                54 reviews
                            </a>
                        </div>
                    </div>
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
                    <div className="fav-checkbox">
                        <label className="fav-checkbox__label">
                            <input
                                className="fav-checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div
                                className="fav-checkbox__custom"
                                style={{ width: 48 }}
                            >
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    stroke="#4C4850"
                                    fill="none"
                                >
                                    <path
                                        d="M13.7863 3.625C11.2504 3.625 10.0004 6.125 10.0004 6.125C10.0004 6.125 8.7504 3.625 6.21446 3.625C4.15352 3.625 2.52149 5.34922 2.5004 7.40664C2.45743 11.6773 5.88829 14.7145 9.64884 17.2668C9.75251 17.3373 9.87501 17.3751 10.0004 17.3751C10.1258 17.3751 10.2483 17.3373 10.352 17.2668C14.1121 14.7145 17.543 11.6773 17.5004 7.40664C17.4793 5.34922 15.8473 3.625 13.7863 3.625V3.625Z"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </label>
                    </div>
                    <button
                        className="button button--bold"
                        type="button"
                        style={{ width: 536 }}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FlightListingCard;