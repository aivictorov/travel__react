import { useNavigate } from "react-router-dom";
import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import FlightFeatures from "../components/sections/FlightFeatures/FlightFeatures";
import FlightPolicies from './../components/sections/FlightPolicies/FlightPolicies';
import DetailsHeader from "../components/blocks/DetailsHeader/DetailsHeader";

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



                        <DetailsHeader />


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