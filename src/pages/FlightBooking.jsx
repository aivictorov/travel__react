import Svg from "../helpers/Svg";

const FlightBooking = () => {
    return (
        <>
            <header className="header-inner">
                <div className="container">
                    <div className="header-nav header-nav--inner-page">
                        <div className="header-nav__left">
                            <a className="header-nav__item" href="#!">
                                <svg width={24} height={24}>
                                    <use href="#flight-icon" />
                                </svg>
                                Find flight{" "}
                            </a>
                            <a className="header-nav__item" href="#!">
                                <svg width={24} height={24}>
                                    <use href="#hotel-icon" />
                                </svg>
                                Find stays{" "}
                            </a>
                        </div>
                        <div className="header-nav__right">
                            <a className="header-nav__item" href="#!">
                                Login
                            </a>
                            <button
                                className="button button--dark button--bold"
                                type="button"
                                style={{ width: 104 }}
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="header-nav__logo">
                            <a className="logo" href="./index.html">
                                <svg
                                    width={111}
                                    height={36}
                                    viewBox="0 0 111 36"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g fill="#000">
                                        <path d="M14.7282 5.57669L17.9466 8.00813L15.9805 10.5097C17.3379 12.0457 17.8382 13.7983 17.8382 15.7295C17.8382 17.9092 17.0161 20.9843 14.1195 22.3068C17.0512 23.7727 17.7649 25.8823 17.7649 28.1352C17.7649 32.9981 14.0463 36 8.93505 36C3.82384 36 0 32.8898 0 28.1352H4.32413C4.32413 30.4233 6.43362 31.9242 8.93505 31.9242C11.4365 31.9242 13.4026 30.5667 13.4026 28.1352C13.4026 25.7038 11.1146 24.5948 8.93505 24.5948C3.4319 24.5948 0 21.2361 0 15.7295C0 10.2229 4.00229 6.79082 8.93823 6.79082C10.3339 6.79082 11.7615 6.96927 12.9788 7.79144L14.7282 5.57669ZM4.32413 15.7295C4.32413 18.8046 6.39857 20.6274 8.93505 20.6274C11.4365 20.6274 13.5109 18.7696 13.5109 15.7295C13.5109 12.6894 11.4397 10.7614 8.93823 10.7614C6.39856 10.7614 4.32413 12.6543 4.32413 15.7295Z" />
                                        <path d="M50.5673 0V24.99H46.2432V0H50.5673Z" />
                                        <path d="M69.9987 16.1948C69.9987 21.2711 66.5317 25.382 60.8119 25.382C55.0921 25.382 51.6602 21.2711 51.6602 16.1948C51.6602 11.1534 55.1622 7.00754 60.7768 7.00754C66.3915 7.00754 69.9987 11.1534 69.9987 16.1948ZM56.0193 16.1948C56.0193 18.8748 57.6285 21.3795 60.8087 21.3795C63.9889 21.3795 65.5981 18.8779 65.5981 16.1948C65.5981 13.5498 63.7403 10.975 60.8087 10.975C57.6636 10.975 56.0193 13.5498 56.0193 16.1948Z" />
                                        <path d="M75.4507 0V9.76082C76.4864 7.93804 79.3829 6.93742 81.2407 6.93742C86.3869 6.93742 90.214 10.0827 90.214 16.1597C90.214 21.9499 86.3168 25.382 81.1355 25.382C78.991 25.382 76.8114 24.6681 75.4507 22.5586L75.164 24.99H71.0884V0H75.4507ZM75.7343 16.1597C75.7343 19.34 78.0924 21.3444 80.8456 21.3444C83.6338 21.3444 85.8516 19.2348 85.8516 16.1597C85.8516 12.9794 83.6338 11.0132 80.8456 11.0132C78.0956 11.01 75.7343 13.0845 75.7343 16.1597Z" />
                                        <path d="M96.6987 19.2317C97.712 21.1819 100.032 22.0136 102.922 20.962C104.432 20.4107 106.207 19.1201 106.794 17.804L110.356 19.4356C109.27 21.8862 106.733 23.7982 104.213 24.7159C98.5023 26.7937 93.8244 24.5024 91.8934 19.1934C90.058 14.1553 92.1643 9.27963 97.5399 7.32301C103.081 5.30584 107.791 7.47278 109.633 14.5249L96.6987 19.2317ZM104.467 12.5619C103.416 10.5097 101.345 10.0476 98.993 10.9017C96.7752 11.7079 95.354 13.4446 95.5324 15.8123L104.467 12.5619Z" />
                                    </g>
                                    <g fill="#8DD3BB">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M39.7626 11.9898C38.3489 9.04026 35.4017 7.00754 31.4702 7.00754C25.8555 7.00754 22.3535 11.1534 22.3535 16.1948C22.3535 19.4132 23.733 22.2436 26.2006 23.8843C26.3412 23.779 26.4258 23.7108 26.4258 23.7108C27.6566 22.9077 28.8573 22.0624 30.0258 21.1765C27.8244 20.5287 26.7127 18.4223 26.7127 16.1948C26.7127 13.5498 28.3601 10.975 31.5021 10.975C34.269 10.975 36.0793 13.2686 36.274 15.7501C37.4868 14.5464 38.6508 13.292 39.7626 11.9898ZM31.0601 25.3736C34.5418 22.9057 37.7611 20.0866 40.6652 16.9631C40.3328 21.6795 36.9335 25.382 31.5052 25.382C31.3553 25.382 31.2069 25.3791 31.0601 25.3736Z"
                                        />
                                        <path d="M43.3179 4.53785C38.8631 2.89989 35.6607 6.42437 35.6607 6.42437L38.6974 8.18979C39.835 7.53652 40.3417 8.17067 40.4723 8.51802C40.5648 8.76339 40.4405 9.03108 40.3417 9.17766L39.6024 10.1114C35.6129 14.9233 30.9223 19.1042 25.6868 22.5203C25.6868 22.5203 24.1063 23.795 23.265 23.8141C22.5576 23.8301 22.2422 23.2341 22.838 22.3801L21.3722 19.0723C21.3722 19.0723 17.558 21.5707 18.2972 25.9619C18.6095 27.8166 20.3525 29.1359 22.2039 28.8013C23.1503 28.6324 24.3198 28.1703 25.7505 27.2239L28.3826 25.5031C33.6181 22.0806 38.3119 17.8869 42.2982 13.0686L43.2032 11.9756C44.567 10.4237 45.1789 9.1458 45.386 8.13562C45.7046 6.59007 44.7901 5.07959 43.3179 4.53785Z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
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
            <footer className="footer">
                <div className="footer__background">
                    <div className="container">
                        <div className="footer__row">
                            <div className="footer__left">
                                {" "}
                                <a className="logo" href="./index.html">
                                    <svg
                                        width={111}
                                        height={36}
                                        viewBox="0 0 111 36"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g fill="#000">
                                            <path d="M14.7282 5.57669L17.9466 8.00813L15.9805 10.5097C17.3379 12.0457 17.8382 13.7983 17.8382 15.7295C17.8382 17.9092 17.0161 20.9843 14.1195 22.3068C17.0512 23.7727 17.7649 25.8823 17.7649 28.1352C17.7649 32.9981 14.0463 36 8.93505 36C3.82384 36 0 32.8898 0 28.1352H4.32413C4.32413 30.4233 6.43362 31.9242 8.93505 31.9242C11.4365 31.9242 13.4026 30.5667 13.4026 28.1352C13.4026 25.7038 11.1146 24.5948 8.93505 24.5948C3.4319 24.5948 0 21.2361 0 15.7295C0 10.2229 4.00229 6.79082 8.93823 6.79082C10.3339 6.79082 11.7615 6.96927 12.9788 7.79144L14.7282 5.57669ZM4.32413 15.7295C4.32413 18.8046 6.39857 20.6274 8.93505 20.6274C11.4365 20.6274 13.5109 18.7696 13.5109 15.7295C13.5109 12.6894 11.4397 10.7614 8.93823 10.7614C6.39856 10.7614 4.32413 12.6543 4.32413 15.7295Z" />
                                            <path d="M50.5673 0V24.99H46.2432V0H50.5673Z" />
                                            <path d="M69.9987 16.1948C69.9987 21.2711 66.5317 25.382 60.8119 25.382C55.0921 25.382 51.6602 21.2711 51.6602 16.1948C51.6602 11.1534 55.1622 7.00754 60.7768 7.00754C66.3915 7.00754 69.9987 11.1534 69.9987 16.1948ZM56.0193 16.1948C56.0193 18.8748 57.6285 21.3795 60.8087 21.3795C63.9889 21.3795 65.5981 18.8779 65.5981 16.1948C65.5981 13.5498 63.7403 10.975 60.8087 10.975C57.6636 10.975 56.0193 13.5498 56.0193 16.1948Z" />
                                            <path d="M75.4507 0V9.76082C76.4864 7.93804 79.3829 6.93742 81.2407 6.93742C86.3869 6.93742 90.214 10.0827 90.214 16.1597C90.214 21.9499 86.3168 25.382 81.1355 25.382C78.991 25.382 76.8114 24.6681 75.4507 22.5586L75.164 24.99H71.0884V0H75.4507ZM75.7343 16.1597C75.7343 19.34 78.0924 21.3444 80.8456 21.3444C83.6338 21.3444 85.8516 19.2348 85.8516 16.1597C85.8516 12.9794 83.6338 11.0132 80.8456 11.0132C78.0956 11.01 75.7343 13.0845 75.7343 16.1597Z" />
                                            <path d="M96.6987 19.2317C97.712 21.1819 100.032 22.0136 102.922 20.962C104.432 20.4107 106.207 19.1201 106.794 17.804L110.356 19.4356C109.27 21.8862 106.733 23.7982 104.213 24.7159C98.5023 26.7937 93.8244 24.5024 91.8934 19.1934C90.058 14.1553 92.1643 9.27963 97.5399 7.32301C103.081 5.30584 107.791 7.47278 109.633 14.5249L96.6987 19.2317ZM104.467 12.5619C103.416 10.5097 101.345 10.0476 98.993 10.9017C96.7752 11.7079 95.354 13.4446 95.5324 15.8123L104.467 12.5619Z" />
                                        </g>
                                        <g fill="#FFF">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M39.7626 11.9898C38.3489 9.04026 35.4017 7.00754 31.4702 7.00754C25.8555 7.00754 22.3535 11.1534 22.3535 16.1948C22.3535 19.4132 23.733 22.2436 26.2006 23.8843C26.3412 23.779 26.4258 23.7108 26.4258 23.7108C27.6566 22.9077 28.8573 22.0624 30.0258 21.1765C27.8244 20.5287 26.7127 18.4223 26.7127 16.1948C26.7127 13.5498 28.3601 10.975 31.5021 10.975C34.269 10.975 36.0793 13.2686 36.274 15.7501C37.4868 14.5464 38.6508 13.292 39.7626 11.9898ZM31.0601 25.3736C34.5418 22.9057 37.7611 20.0866 40.6652 16.9631C40.3328 21.6795 36.9335 25.382 31.5052 25.382C31.3553 25.382 31.2069 25.3791 31.0601 25.3736Z"
                                            />
                                            <path d="M43.3179 4.53785C38.8631 2.89989 35.6607 6.42437 35.6607 6.42437L38.6974 8.18979C39.835 7.53652 40.3417 8.17067 40.4723 8.51802C40.5648 8.76339 40.4405 9.03108 40.3417 9.17766L39.6024 10.1114C35.6129 14.9233 30.9223 19.1042 25.6868 22.5203C25.6868 22.5203 24.1063 23.795 23.265 23.8141C22.5576 23.8301 22.2422 23.2341 22.838 22.3801L21.3722 19.0723C21.3722 19.0723 17.558 21.5707 18.2972 25.9619C18.6095 27.8166 20.3525 29.1359 22.2039 28.8013C23.1503 28.6324 24.3198 28.1703 25.7505 27.2239L28.3826 25.5031C33.6181 22.0806 38.3119 17.8869 42.2982 13.0686L43.2032 11.9756C44.567 10.4237 45.1789 9.1458 45.386 8.13562C45.7046 6.59007 44.7901 5.07959 43.3179 4.53785Z" />
                                        </g>
                                    </svg>
                                </a>
                                <div className="footer__social-icons">
                                    <div className="social-icons">
                                        <a className="social-icons__item" href="#!">
                                            <img
                                                src="./img/icons/social/facebook.svg"
                                                alt="facebook"
                                                width={20}
                                            />
                                        </a>
                                        <a className="social-icons__item" href="#!">
                                            <img
                                                src="./img/icons/social/instagram.svg"
                                                alt="instagram"
                                                width={20}
                                            />
                                        </a>
                                        <a className="social-icons__item" href="#!">
                                            <img
                                                src="./img/icons/social/twitter.svg"
                                                alt="twitter"
                                                width={20}
                                            />
                                        </a>
                                        <a className="social-icons__item" href="#!">
                                            <img
                                                src="./img/icons/social/youtube.svg"
                                                alt="youtube"
                                                width={20}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer__right">
                                <div className="footer__column">
                                    <div className="footer-nav__title">Our Destinations</div>
                                    <ul className="footer-nav__list">
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Canada
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Alaska
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                France
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Iceland
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__column">
                                    <div className="footer-nav__title">Our Activities</div>
                                    <ul className="footer-nav__list">
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Northern Lights
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Cruising &amp; sailing
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Multi-activities
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Kayaing
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__column">
                                    <div className="footer-nav__title">Travel Blogs</div>
                                    <ul className="footer-nav__list">
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Bali Travel Guide
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Sri Lanks Travel Guide
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Peru Travel Guide
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Bali Travel Guide
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__column">
                                    <div className="footer-nav__title">About Us</div>
                                    <ul className="footer-nav__list">
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Our Story
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Work with us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__column">
                                    <div className="footer-nav__title">Contact Us</div>
                                    <ul className="footer-nav__list">
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Our Story
                                            </a>
                                        </li>
                                        <li className="footer-nav__item">
                                            {" "}
                                            <a className="footer-nav__link" href="#!">
                                                Work with us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__form-wrapper">
                    <div className="container">
                        <form className="subscribe-form">
                            <div className="subscribe-form__content">
                                <div className="subscribe-form__title">Subscribe Newsletter</div>
                                <div className="subscribe-form__subtitle">The Travel</div>
                                <div className="subscribe-form__text">
                                    Get inspired! Receive travel discounts, tips and behind the scenes
                                    stories.
                                </div>
                                <div className="subscribe-form__row">
                                    <input
                                        className="subscribe-form__input"
                                        type="text"
                                        defaultValue="Your email address"
                                    />
                                    <button className="subscribe-button" type="button">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="subscribe-form__image">
                                <img src="./img/footer/mailbox.svg" alt="mailbox" />
                            </div>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default FlightBooking;