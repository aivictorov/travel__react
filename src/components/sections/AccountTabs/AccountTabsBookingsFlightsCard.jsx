const AccountTabsBookingsFlightsCard = () => {
    return (
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
    );
}

export default AccountTabsBookingsFlightsCard;