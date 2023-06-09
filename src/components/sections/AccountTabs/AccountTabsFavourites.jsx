const AccountTabsFavourites = () => {
    return (
        <div
            className="account-tabs__content none"
            tab-content="favourites"
            tab-group="account"
            tabs="favourites"
        >
            <h2 className="account-tabs__content-title">Favourites</h2>
            <div className="account-bookings">
                <ul className="tabs">
                    <button
                        className="tabs__item active"
                        type="button"
                        style={{ width: "calc(100% / 2)" }}
                        tab-group="favourites"
                        tab-button="flights"
                    >
                        <div className="tabs__item-icon">
                            <svg width={24} height={24}>
                                <use href="#flight-icon" />
                            </svg>
                        </div>
                        <div className="tabs__item-content">
                            <div className="tabs__item-title">Flights</div>
                        </div>
                    </button>
                    <button
                        className="tabs__item"
                        type="button"
                        style={{ width: "calc(100% / 2)" }}
                        tab-group="favourites"
                        tab-button="hotels"
                    >
                        <div className="tabs__item-icon">
                            <svg width={24} height={24}>
                                <use href="#hotel-icon" />
                            </svg>
                        </div>
                        <div className="tabs__item-content">
                            <div className="tabs__item-title">Stays</div>
                        </div>
                    </button>
                </ul>
                <div
                    className="account-bookings__content"
                    tab-content="flights"
                    tab-group="favourites"
                >
                    <div className="account-booking-card">
                        <div className="account-booking-card__icon">
                            <img
                                src="./img/flights/airline-example-1/logo.png"
                                alt="airline-logo"
                            />
                        </div>
                        <div className="account-booking-card__info">
                            <div className="account-booking-card__time">
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Newark(EWR)
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        12:00 pm
                                    </div>
                                </div>
                                <div className="account-booking-card__time-spacer">—</div>
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Newark(EWR)
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        12:00 pm
                                    </div>
                                </div>
                            </div>
                            <ul className="account-booking-card__features">
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Date
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            A12
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Flight time
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            Newark(EWR)
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/gate.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Gate
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            A12
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Seat no.
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            128
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="account-booking-card__buttons">
                            <button className="button" type="button">
                                Download Ticket
                            </button>
                            <button
                                className="square-button square-button--border"
                                type="button"
                                style={{ width: 48, height: 48 }}
                            >
                                <svg width={16} height={16}>
                                    <use href="#arrow-right" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="account-booking-card">
                        <div className="account-booking-card__icon">
                            <img
                                src="./img/flights/airline-example-1/logo.png"
                                alt="airline-logo"
                            />
                        </div>
                        <div className="account-booking-card__info">
                            <div className="account-booking-card__time">
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Newark(EWR)
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        12:00 pm
                                    </div>
                                </div>
                                <div className="account-booking-card__time-spacer">—</div>
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Newark(EWR)
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        12:00 pm
                                    </div>
                                </div>
                            </div>
                            <ul className="account-booking-card__features">
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Date
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            A12
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Flight time
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            Newark(EWR)
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/gate.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Gate
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            A12
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Seat no.
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            128
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="account-booking-card__buttons">
                            <button className="button" type="button">
                                Download Ticket
                            </button>
                            <button
                                className="square-button square-button--border"
                                type="button"
                                style={{ width: 48, height: 48 }}
                            >
                                <svg width={16} height={16}>
                                    <use href="#arrow-right" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="account-booking-card">
                        <div className="account-booking-card__icon">
                            <img
                                src="./img/flights/airline-example-1/logo.png"
                                alt="airline-logo"
                            />
                        </div>
                        <div className="account-booking-card__info">
                            <div className="account-booking-card__time">
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Newark(EWR)
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        12:00 pm
                                    </div>
                                </div>
                                <div className="account-booking-card__time-spacer">—</div>
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Newark(EWR)
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        12:00 pm
                                    </div>
                                </div>
                            </div>
                            <ul className="account-booking-card__features">
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Date
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            A12
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Flight time
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            Newark(EWR)
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/gate.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Gate
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            A12
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Seat no.
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            128
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="account-booking-card__buttons">
                            <button className="button" type="button">
                                Download Ticket
                            </button>
                            <button
                                className="square-button square-button--border"
                                type="button"
                                style={{ width: 48, height: 48 }}
                            >
                                <svg width={16} height={16}>
                                    <use href="#arrow-right" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="account-booking-card">
                        <div className="account-booking-card__icon">
                            <img
                                src="./img/flights/airline-example-1/logo.png"
                                alt="airline-logo"
                            />
                        </div>
                        <div className="account-booking-card__info">
                            <div className="account-booking-card__time">
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Newark(EWR)
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        12:00 pm
                                    </div>
                                </div>
                                <div className="account-booking-card__time-spacer">—</div>
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Newark(EWR)
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        12:00 pm
                                    </div>
                                </div>
                            </div>
                            <ul className="account-booking-card__features">
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Date
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            A12
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Flight time
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            Newark(EWR)
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/gate.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Gate
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            A12
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Seat no.
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            128
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="account-booking-card__buttons">
                            <button className="button" type="button">
                                Download Ticket
                            </button>
                            <button
                                className="square-button square-button--border"
                                type="button"
                                style={{ width: 48, height: 48 }}
                            >
                                <svg width={16} height={16}>
                                    <use href="#arrow-right" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="account-bookings__content"
                    tab-content="hotels"
                    tab-group="favourites"
                >
                    <div className="account-booking-card">
                        <div className="account-booking-card__icon">
                            <img
                                src="./img/hotels/hotel-example-1/logo.jpg"
                                alt="hotel-logo"
                            />
                        </div>
                        <div className="account-booking-card__info">
                            <div className="account-booking-card__time">
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Check-in
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        Thur, Dec 8
                                    </div>
                                </div>
                                <div className="account-booking-card__time-spacer">—</div>
                                <div className="account-booking-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        Check-out
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        Fri, Dec 9
                                    </div>
                                </div>
                            </div>
                            <ul className="account-booking-card__features">
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Check-In
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            12:00pm
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Check-Out
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            11:30am
                                        </div>
                                    </div>
                                </li>
                                <li className="account-booking-card__feature">
                                    <div className="account-booking-card__feature-icon">
                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                    </div>
                                    <div className="account-booking-card__feature-content">
                                        <div className="account-booking-card__feature-title">
                                            Room №
                                        </div>
                                        <div className="account-booking-card__feature-value">
                                            On arrival
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="account-booking-card__buttons">
                            <button className="button" type="button">
                                Download Ticket
                            </button>
                            <button
                                className="square-button square-button--border"
                                type="button"
                                style={{ width: 48, height: 48 }}
                            >
                                <svg width={16} height={16}>
                                    <use href="#arrow-right" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountTabsFavourites;