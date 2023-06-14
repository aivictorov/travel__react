import { useNavigate } from "react-router-dom";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import FlightFeatures from "../components/sections/FlightFeatures/FlightFeatures";
import FlightPolicies from './../components/sections/FlightPolicies/FlightPolicies';

const FlightDetails = () => {
    const navigate = useNavigate();

    return (
        <>
            <HeaderInner />

            <main className="details">
                <div className="container">
                    <div className="details__nav">
                        <nav className="track-nav">
                            <a className="track-link" href="#!">
                                Turkey
                            </a>
                            <svg width={16} height={16}>
                                <use href="#arrow-right" />
                            </svg>
                            <a className="track-link" href="#!">
                                Istanbul
                            </a>
                            <svg width={16} height={16}>
                                <use href="#arrow-right" />
                            </svg>
                            <a className="track-link track-link--active" href="#!">
                                CVK Park Bosphorus Hotel Istanbul
                            </a>
                        </nav>
                    </div>
                    <div className="details__header">
                        <div className="details-header">
                            <div className="details-header__content">
                                <div className="details-header__left">
                                    <div className="details-header__main">
                                        <div className="details-header__main-title">
                                            Emirates A380 Airbus
                                        </div>
                                        <div className="stars">
                                            <div className="stars__icons">
                                                <svg width={16} height={16}>
                                                    <use href="#star-icon" />
                                                </svg>
                                                <svg width={16} height={16}>
                                                    <use href="#star-icon" />
                                                </svg>
                                                <svg width={16} height={16}>
                                                    <use href="#star-icon" />
                                                </svg>
                                                <svg width={16} height={16}>
                                                    <use href="#star-icon" />
                                                </svg>
                                                <svg width={16} height={16}>
                                                    <use href="#star-icon" />
                                                </svg>
                                            </div>
                                            <div className="stars__text"> 5 Star Hotel</div>
                                        </div>
                                    </div>
                                    <div className="details-header__details">
                                        <div className="location">
                                            <div className="location__icon">
                                                <svg width={18} height={18}>
                                                    <use href="#location" />
                                                </svg>
                                            </div>
                                            <a className="location__link" href="#!">
                                                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                                            </a>
                                        </div>
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
                                </div>
                                <div className="details-header__right">
                                    <div className="price">
                                        <span className="price-value price-value--big">$240</span>
                                        <span className="price-period">/night</span>
                                    </div>
                                    <div className="details-header__buttons">
                                        <div className="fav-checkbox">
                                            <label className="fav-checkbox__label">
                                                <input
                                                    className="fav-checkbox__hidden visually-hidden"
                                                    type="checkbox"
                                                />
                                                <div className="fav-checkbox__custom" style={{ width: 48 }}>
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
                                            className="square-button square-button--border"
                                            type="button"
                                            style={{ width: 48, height: 48 }}
                                        >
                                            <svg width={20} height={20}>
                                                <use href="#share" />
                                            </svg>
                                        </button>


                                        <button
                                            className="button button--bold"
                                            type="button"
                                            style={{ width: 150 }}
                                            onClick={() => { navigate('/flight-booking') }}
                                        >
                                            Book now
                                        </button>


                                    </div>
                                </div>
                            </div>
                            <div className="details-header__image">
                                <img
                                    src="./img/flights/details-header.jpg"
                                    alt="Emirates A380 Airbus"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="details__flight-content">


                        <FlightFeatures />

                        <FlightPolicies />


                        <div className="flight-ticket">
                            <div className="flight-ticket__content">
                                <div className="flight-ticket__content-top">
                                    <div className="flight-ticket__date">Return Wed, Dec 8</div>
                                    <div className="flight-ticket__duration">2h 28m</div>
                                </div>
                                <div className="flight-ticket__content-middle">
                                    <div className="flight-ticket__airline">
                                        <div className="flight-ticket__airline-logo">
                                            <img
                                                src="./img/flights/airline-example-1/logo.png"
                                                alt="airline-logo"
                                            />
                                        </div>
                                        <div className="flight-ticket__airline-text">
                                            <span>Emirates </span>
                                            <span>Airbus A320</span>
                                        </div>
                                    </div>
                                    <ul className="flight-ticket__service-list">
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#flight-icon" />
                                            </svg>
                                        </li>
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#wifi" />
                                            </svg>
                                        </li>
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#stopwatch" />
                                            </svg>
                                        </li>
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#food" />
                                            </svg>
                                        </li>
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#seat" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flight-ticket__content-bottom">
                                    <div className="flight-ticket__time">
                                        {" "}
                                        <span>12:00 pm</span>
                                        <span>Newark(EWR)</span>
                                    </div>
                                    <div className="flight-ticket__spacer">
                                        <svg width={48} height={48}>
                                            <use href="#flight-icon" />
                                        </svg>
                                    </div>
                                    <div className="flight-ticket__time">
                                        <span>12:00 pm</span>
                                        <span>Newark(EWR)</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flight-ticket">
                            <div className="flight-ticket__content">
                                <div className="flight-ticket__content-top">
                                    <div className="flight-ticket__date">Return Wed, Dec 8</div>
                                    <div className="flight-ticket__duration">2h 28m</div>
                                </div>
                                <div className="flight-ticket__content-middle">
                                    <div className="flight-ticket__airline">
                                        <div className="flight-ticket__airline-logo">
                                            <img
                                                src="./img/flights/airline-example-1/logo.png"
                                                alt="airline-logo"
                                            />
                                        </div>
                                        <div className="flight-ticket__airline-text">
                                            <span>Emirates </span>
                                            <span>Airbus A320</span>
                                        </div>
                                    </div>
                                    <ul className="flight-ticket__service-list">
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#flight-icon" />
                                            </svg>
                                        </li>
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#wifi" />
                                            </svg>
                                        </li>
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#stopwatch" />
                                            </svg>
                                        </li>
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#food" />
                                            </svg>
                                        </li>
                                        <li className="flight-ticket__service-item">
                                            <svg width={24} height={24}>
                                                <use href="#seat" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flight-ticket__content-bottom">
                                    <div className="flight-ticket__time">
                                        {" "}
                                        <span>12:00 pm</span>
                                        <span>Newark(EWR)</span>
                                    </div>
                                    <div className="flight-ticket__spacer">
                                        <svg width={48} height={48}>
                                            <use href="#flight-icon" />
                                        </svg>
                                    </div>
                                    <div className="flight-ticket__time">
                                        <span>12:00 pm</span>
                                        <span>Newark(EWR)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details__hotel-content"></div>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default FlightDetails;