const AccountTabsBookingHotelsCard = () => {
    return (
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
    );
}

export default AccountTabsBookingHotelsCard;