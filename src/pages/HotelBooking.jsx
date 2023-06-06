import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";

const HotelBooking = () => {
    return (
        <>
            <HeaderInner/>
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
                            <div className="hotel-reservation">
                                <div className="hotel-reservation__top">
                                    <div className="hotel-reservation__title">
                                        Superior room - 1 double bed or 2 twin beds
                                    </div>
                                    <div className="price">
                                        <span className="price-value price-value--big">$240</span>
                                        <span className="price-period">/night</span>
                                    </div>
                                </div>
                                <div className="hotel-reservation__middle">
                                    <div className="hotel-reservation__image">
                                        <img
                                            src="./img/hotels/hotel-example-1/logo.jpg"
                                            alt="hotel-logo"
                                        />
                                    </div>
                                    <div className="hotel-reservation__about">
                                        <div className="hotel-reservation__about-title">
                                            CVK Park Bosphorus Hotel Istanbul
                                        </div>
                                        <div className="hotel-reservation__about-adress">
                                            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-reservation__bottom">
                                    <div className="hotel-reservation__begin">
                                        {" "}
                                        <span>Thursday, Dec 8</span>
                                        <span>Check-In</span>
                                    </div>
                                    <div className="hotel-reservation__spacer">
                                        <svg width={48} height={48}>
                                            <use href="#hotel-icon" />
                                        </svg>
                                    </div>
                                    <div className="hotel-reservation__end">
                                        {" "}
                                        <span>Friday, Dec 9</span>
                                        <span>Check-Out</span>
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
                                        {" "}
                                        <img
                                            src="./img/hotels/hotel-example-1/cover_small.jpg"
                                            alt="hotel"
                                        />
                                    </div>
                                    <div className="booking-summary__object-info">
                                        <div className="booking-summary__object-header">
                                            <div className="booking-summary__object-title">
                                                CVK Park Bosphorus
                                            </div>
                                            <div className="booking-summary__object-subtitle">
                                                Superior room - 1 double bed or 2 twin beds
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
            <Footer/>
        </>
    );
}

export default HotelBooking;