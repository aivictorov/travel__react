import './HeaderMainSearchForm.scss';

const HeaderMainSearchForm = () => {
    return (
        <div className="search-form search-form--full" tabs="search">
            <div className="search-form__tabs">
                <button
                    className="search-form__link"
                    type="button"
                    tab-button="flight-search"
                    tab-group="search"
                >
                    <svg width={24} height={24}>
                        <use href="#flight-icon" />
                    </svg>
                    Flights
                </button>
                <button
                    className="search-form__link"
                    type="button"
                    tab-button="hotel-search"
                    tab-group="search"
                >
                    <svg width={24} height={24}>
                        <use href="#hotel-icon" />
                    </svg>
                    Stays
                </button>
            </div>
            <div
                className="search-form__content"
                tab-content="flight-search"
                tab-group="search"
            >
                <div className="search-form__fields">
                    <div
                        className="input"
                        style={{ width: "calc((100% - 140px - 3 * 24px) / 3)" }}
                    >
                        <input
                            className="input__field"
                            type="text"
                            defaultValue="Lahore - Karachi"
                        />
                        <div className="input__label">From - To</div>
                        <button
                            className="input__icon"
                            type="button"
                            data-button="swap-button"
                        >
                            <svg width={24} height={24}>
                                <use href="#swap-icon"> </use>
                            </svg>
                        </button>
                    </div>
                    <div className="select" style={{ width: 140 }}>
                        <button className="select__button" type="button">
                            {" "}
                            Return
                        </button>
                        <div className="select__label">Trip</div>
                        <div className="select__icon">
                            <svg width={24} height={24}>
                                <use href="#arrow-down" />
                            </svg>
                        </div>
                        <ul className="select__list">
                            <li data-value="Return">Return</li>
                            <li data-value="Single">Single</li>
                        </ul>
                        <input
                            className="select__input-hidden"
                            type="text"
                            name="select-category"
                            defaultValue=""
                        />
                    </div>
                    <div
                        className="input"
                        style={{ width: "calc((100% - 140px - 3 * 24px) / 3)" }}
                    >
                        <input
                            className="input__field"
                            type="text"
                            defaultValue="07 Nov 22 - 13 Nov 22"
                        />
                        <div className="input__label">Depart - Return</div>
                    </div>
                    <div
                        className="input"
                        style={{ width: "calc((100% - 140px - 3 * 24px) / 3)" }}
                    >
                        <input
                            className="input__field"
                            type="text"
                            defaultValue="1 Passenger, Economy"
                        />
                        <div className="input__label">Passenger - Class</div>
                    </div>
                </div>
                <div className="search-form__buttons">
                    <button className="search-form__add-button" type="button">
                        <svg width={16} height={16}>
                            <use href="#add-icon" />
                        </svg>
                        Add Promo Code
                    </button>
                    <button className="button" type="button">
                        <div className="button__icon">
                            <svg width={16} height={16}>
                                <use href="#send-icon" />
                            </svg>
                        </div>
                        Show Filghts
                    </button>
                </div>
            </div>
            <div
                className="search-form__content none"
                tab-content="hotel-search"
                tab-group="search"
            >
                <div className="search-form__fields">
                    <div
                        className="input"
                        style={{ width: "calc(100% - 3 * 240px - 3 * 16px)" }}
                    >
                        <input
                            className="input__field"
                            type="text"
                            defaultValue="Istanbul, Turkey"
                        />
                        <div className="input__label">Enter Destination</div>
                    </div>
                    <div className="input" style={{ width: 240 }}>
                        <input
                            className="input__field"
                            type="text"
                            defaultValue="Fri 12/2"
                        />
                        <div className="input__label">Check In</div>
                        <button className="input__icon" type="button">
                            <svg width={24} height={24}>
                                <use href="#calendar-icon"> </use>
                            </svg>
                        </button>
                    </div>
                    <div className="input" style={{ width: 240 }}>
                        <input
                            className="input__field"
                            type="text"
                            defaultValue="Sun 12/4"
                        />
                        <div className="input__label">Check Out</div>
                        <button className="input__icon" type="button">
                            <svg width={24} height={24}>
                                <use href="#calendar-icon"> </use>
                            </svg>
                        </button>
                    </div>
                    <div className="input" style={{ width: 240 }}>
                        <input
                            className="input__field"
                            type="text"
                            defaultValue="1 room, 2 guests"
                        />
                        <div className="input__label">Rooms &amp; Guests</div>
                    </div>
                </div>
                <div className="search-form__buttons">
                    <button className="search-form__add-button" type="button">
                        <svg width={16} height={16}>
                            <use href="#add-icon" />
                        </svg>
                        Add Promo Code
                    </button>
                    <button className="button" type="button">
                        <div className="button__icon">
                            <svg width={16} height={16}>
                                <use href="#building-icon" />
                            </svg>
                        </div>
                        Show Places
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderMainSearchForm;