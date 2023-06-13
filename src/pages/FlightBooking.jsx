import Svg from "../helpers/SVG";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import Footer from './../components/sections/Footer/Footer';

const FlightBooking = () => {
    return (
        <>
            <HeaderInner />

            <main className="booking">
                <div className="container">
                    <div className="booking__nav">
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
                    <div className="booking__row">
                        <div className="booking__left">
                            <div className="flight-ticket">
                                <div className="flight-ticket__header">
                                    <div className="flight-ticket__title">Emirates A380 Airbus</div>
                                    <div className="price">
                                        <span className="price-value price-value--big">$240</span>
                                        <span className="price-period">/night</span>
                                    </div>
                                </div>
                                <div className="flight-ticket__content">
                                    <div className="flight-ticket__content-top">
                                        <div className="flight-ticket__date flight-ticket__date--booking-page">
                                            Return Wed, Dec 8
                                        </div>
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
                                    <div className="flight-ticket__content-bottom flight-ticket__content-bottom--booking-page">
                                        <div className="flight-ticket__time">
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
                            <div className="booking-payment-methods">
                                <div className="payment-radio" style={{ height: 80 }}>
                                    <input
                                        className="payment-radio__input visually-hidden"
                                        type="radio"
                                        name="pay-methods"
                                        id="full"
                                        defaultChecked=""
                                    />
                                    <label className="payment-radio__label" htmlFor="full">
                                        <div className="payment-radio__label-title">Pay in full</div>
                                        <div className="payment-radio__label-text">
                                            Pay the total and you are all set
                                        </div>
                                        <div className="payment-radio__custom-input"> </div>
                                    </label>
                                </div>
                                <div className="payment-radio" style={{ height: 100 }}>
                                    <input
                                        className="payment-radio__input visually-hidden"
                                        type="radio"
                                        name="pay-methods"
                                        id="part"
                                    />
                                    <label className="payment-radio__label" htmlFor="part">
                                        <div className="payment-radio__label-title">
                                            Pay part now, part later
                                        </div>
                                        <div className="payment-radio__label-text">
                                            Pay $207.43 now, and the rest ($207.43) will be automatically
                                            charged to the same payment method on Nov 14, 2022. No extra
                                            fees.
                                        </div>
                                        <div className="payment-radio__custom-input"> </div>
                                    </label>
                                </div>
                                <a className="booking-payment-methods__link" href="#!">
                                    More info
                                </a>
                            </div>
                            <div className="booking-login">
                                <form className="booking-login-form">
                                    <div className="booking-login-form__title">
                                        Login or Sign up to book
                                    </div>
                                    <input
                                        className="booking-login-form__input"
                                        type="text"
                                        defaultValue="Phone Number"
                                    />
                                    <div className="booking-login-form__notice">
                                        We’ll call or text you to confirm your number. Standard message
                                        and data rates apply. <a href="#!">Privacy Policy</a>
                                    </div>
                                    <button
                                        className="button"
                                        type="button"
                                        style={{ width: "100%" }}
                                    >
                                        Continue
                                    </button>
                                </form>
                                <div className="login-with">
                                    <div className="login-with__header login-with__header--booking-page">
                                        <div className="login-with__text login-with__text--booking-page">
                                            Or login with
                                        </div>
                                    </div>
                                    <div className="login-with__buttons">
                                        <button
                                            className="login-with-button"
                                            type="button"
                                            style={{ width: "calc((100% - 2 * 16px) / 3)" }}
                                        >
                                            <div className="button__icon">
                                                <svg width={24} height={24}>
                                                    <use href="#facebook-icon" />
                                                </svg>
                                            </div>
                                        </button>
                                        <button
                                            className="login-with-button"
                                            type="button"
                                            style={{ width: "calc((100% - 2 * 16px) / 3)" }}
                                        >
                                            <div className="button__icon">
                                                <svg width={24} height={24}>
                                                    <use href="#google-icon" />
                                                </svg>
                                            </div>
                                        </button>
                                        <button
                                            className="login-with-button"
                                            type="button"
                                            style={{ width: "calc((100% - 2 * 16px) / 3)" }}
                                        >
                                            <div className="button__icon">
                                                <svg width={24} height={24}>
                                                    <use href="#apple-icon" />
                                                </svg>
                                            </div>
                                        </button>
                                        <button
                                            className="login-with-button"
                                            type="button"
                                            style={{ width: "100%" }}
                                        >
                                            <div className="button__icon">
                                                <svg width={24} height={24}>
                                                    <use href="#apple-icon" />
                                                </svg>
                                            </div>
                                            Continue with email
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="booking__right">
                            <div className="booking-summary">
                                <div className="booking-summary__object">
                                    <div className="booking-summary__object-image">

                                        <img
                                            src="./img/flights/airline-example-1/logo-image.jpg"
                                            alt="hotel"
                                        />
                                    </div>
                                    <div className="booking-summary__object-info">
                                        <div className="booking-summary__object-header">
                                            <div className="booking-summary__object-title">Economy</div>
                                            <div className="booking-summary__object-subtitle">
                                                Emirates A380 Airbus
                                            </div>
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
                                <div className="booking-summary__protected">
                                    Your booking is protected by <strong>golobe</strong>
                                </div>
                                <div className="booking-summary__details">
                                    <div className="booking-summary__title">Price Details</div>
                                    <div className="booking-summary__item">
                                        <span>Base Fare</span>
                                        <span>$240</span>
                                    </div>
                                    <div className="booking-summary__item">
                                        <span>Discount</span>
                                        <span>$0</span>
                                    </div>
                                    <div className="booking-summary__item">
                                        <span>Taxes</span>
                                        <span>$20</span>
                                    </div>
                                    <div className="booking-summary__item">
                                        <span>Service Fee</span>
                                        <span>$5</span>
                                    </div>
                                </div>
                                <div className="booking-summary__total">
                                    <span>Total </span>
                                    <span>$265</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </>
    );
}

export default FlightBooking;