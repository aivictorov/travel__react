import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";

const FlightListing = () => {
    return (
        <>
            <HeaderInner />

            <main className="listing">
                <div className="listing-form">
                    <div className="container">
                        <div className="search-form" tabs="search">
                            <div
                                className="search-form__content"
                                tab-content="flight-search"
                                tab-group="search"
                            >
                                <div className="search-form__fields">
                                    <div
                                        className="input"
                                        style={{ width: "calc((100% - 140px - 56px - 4 * 24px) / 3)" }}
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
                                    <button
                                        className="square-button"
                                        type="button"
                                        style={{ width: 56, height: 56 }}
                                    >
                                        <svg width={24} height={24}>
                                            <use href="#search-icon" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing-content">
                    <div className="container">
                        <div className="listing-content__row">
                            <div className="listing-content__left">
                                <div className="listing-filters">
                                    <h3 className="listing-filters__title">Filters</h3>
                                    <div className="filter-item">
                                        <div className="filter-item__header">
                                            <h4 className="filter-item__title">Price</h4>
                                            <button
                                                className="filter-item__button"
                                                type="button"
                                                accordeon-button="Price"
                                            >
                                                <svg width={24} height={24}>
                                                    <use href="#arrow-down" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div
                                            className="filter-item__content filter-item__content--column"
                                            accordeon-content="Price"
                                        >
                                            <div className="dual-range-input">
                                                <div className="dual-range-input__track-wrapper">
                                                    <div
                                                        className="dual-range-input__track"
                                                        data-name="track"
                                                    />
                                                    <input
                                                        data-name="range-1"
                                                        type="range"
                                                        min={50}
                                                        max={1200}
                                                        defaultValue={0}
                                                        step={1}
                                                    />
                                                    <input
                                                        data-name="range-2"
                                                        type="range"
                                                        min={50}
                                                        max={1200}
                                                        defaultValue={1200}
                                                        step={1}
                                                    />
                                                </div>
                                                <div className="dual-range-input__values">
                                                    <span data-name="value-1">100$</span>
                                                    <span data-name="value-2">1500$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-item">
                                        <div className="filter-item__header">
                                            <h4 className="filter-item__title">Departure Time</h4>
                                            <button
                                                className="filter-item__button"
                                                type="button"
                                                accordeon-button="Departure Time"
                                            >
                                                <svg width={24} height={24}>
                                                    <use href="#arrow-down" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div
                                            className="filter-item__content filter-item__content--column"
                                            accordeon-content="Departure Time"
                                        >
                                            <div className="dual-range-input">
                                                <div className="dual-range-input__track-wrapper">
                                                    <div
                                                        className="dual-range-input__track"
                                                        data-name="track"
                                                    />
                                                    <input
                                                        data-name="range-1"
                                                        type="range"
                                                        min={50}
                                                        max={1200}
                                                        defaultValue={0}
                                                        step={1}
                                                    />
                                                    <input
                                                        data-name="range-2"
                                                        type="range"
                                                        min={50}
                                                        max={1200}
                                                        defaultValue={1200}
                                                        step={1}
                                                    />
                                                </div>
                                                <div className="dual-range-input__values">
                                                    <span data-name="value-1">100$</span>
                                                    <span data-name="value-2">1500$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-item">
                                        <div className="filter-item__header">
                                            <h4 className="filter-item__title">Rating</h4>
                                            <button
                                                className="filter-item__button"
                                                type="button"
                                                accordeon-button="Rating"
                                            >
                                                <svg width={24} height={24}>
                                                    <use href="#arrow-down" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div
                                            className="filter-item__content filter-item__content--row"
                                            accordeon-content="Rating"
                                        >
                                            <div className="rating-filter-checkbox">
                                                <label className="rating-filter-checkbox__label">
                                                    <input
                                                        className="rating-filter-checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div
                                                        className="rating-filter-checkbox__custom"
                                                        style={{ width: 40 }}
                                                    >
                                                        0+
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="rating-filter-checkbox">
                                                <label className="rating-filter-checkbox__label">
                                                    <input
                                                        className="rating-filter-checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div
                                                        className="rating-filter-checkbox__custom"
                                                        style={{ width: 40 }}
                                                    >
                                                        1+
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="rating-filter-checkbox">
                                                <label className="rating-filter-checkbox__label">
                                                    <input
                                                        className="rating-filter-checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div
                                                        className="rating-filter-checkbox__custom"
                                                        style={{ width: 40 }}
                                                    >
                                                        2+
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="rating-filter-checkbox">
                                                <label className="rating-filter-checkbox__label">
                                                    <input
                                                        className="rating-filter-checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div
                                                        className="rating-filter-checkbox__custom"
                                                        style={{ width: 40 }}
                                                    >
                                                        3+
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="rating-filter-checkbox">
                                                <label className="rating-filter-checkbox__label">
                                                    <input
                                                        className="rating-filter-checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div
                                                        className="rating-filter-checkbox__custom"
                                                        style={{ width: 40 }}
                                                    >
                                                        4+
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-item">
                                        <div className="filter-item__header">
                                            <h4 className="filter-item__title">Airlines</h4>
                                            <button
                                                className="filter-item__button"
                                                type="button"
                                                accordeon-button="Airlines"
                                            >
                                                <svg width={24} height={24}>
                                                    <use href="#arrow-down" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div
                                            className="filter-item__content filter-item__content--column"
                                            accordeon-content="Airlines"
                                        >
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Emirated</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Fly Dubai</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Qatar</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Etihad</div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-item">
                                        <div className="filter-item__header">
                                            <h4 className="filter-item__title">Trips</h4>
                                            <button
                                                className="filter-item__button"
                                                type="button"
                                                accordeon-button="Trips"
                                            >
                                                <svg width={24} height={24}>
                                                    <use href="#arrow-down" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div
                                            className="filter-item__content filter-item__content--column"
                                            accordeon-content="Trips"
                                        >
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Round trip</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> On Way</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Multi-City</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value">
                                                        {" "}
                                                        My Dates Are Flexible
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="listing-content__right">
                                <div className="listing-content__right-wrapper">
                                    <ul className="tabs">
                                        <button
                                            className="tabs__item"
                                            type="button"
                                            style={{ width: "calc(100% / 3)" }}
                                        >
                                            <div className="tabs__item-content">
                                                <div className="tabs__item-title">Cheapest</div>
                                                <div className="tabs__item-subtitle">$99, 2h 00m</div>
                                            </div>
                                        </button>
                                        <button
                                            className="tabs__item"
                                            type="button"
                                            style={{ width: "calc(100% / 3)" }}
                                        >
                                            <div className="tabs__item-content">
                                                <div className="tabs__item-title">Best</div>
                                                <div className="tabs__item-subtitle">$199, 3h 30m</div>
                                            </div>
                                        </button>
                                        <button
                                            className="tabs__item"
                                            type="button"
                                            style={{ width: "calc(100% / 3)" }}
                                        >
                                            <div className="tabs__item-content">
                                                <div className="tabs__item-title">Quickest</div>
                                                <div className="tabs__item-subtitle">$299, 5h 00m</div>
                                            </div>
                                        </button>
                                    </ul>
                                    <div className="listing-sort">
                                        <div className="listing-sort__left">
                                            Showing 4 of <a href="#!">257 places</a>
                                        </div>
                                        <div className="listing-sort__right">
                                            <span>Sort by </span>Recommended
                                        </div>
                                    </div>
                                    <div className="listing-content__cards">
                                        <div className="flight-card">
                                            <div className="flight-card__image">
                                                {" "}
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
                                                            <span className="price-value">$104</span>
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
                                        <div className="flight-card">
                                            <div className="flight-card__image">
                                                {" "}
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
                                                            <span className="price-value">$104</span>
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
                                        <div className="flight-card">
                                            <div className="flight-card__image">
                                                {" "}
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
                                                            <span className="price-value">$104</span>
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
                                    </div>
                                </div>
                                <div className="listing-content__right-button">
                                    <button
                                        className="button button--dark button--bold"
                                        type="button"
                                        style={{ width: "100%" }}
                                    >
                                        Show more
                                    </button>
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

export default FlightListing;