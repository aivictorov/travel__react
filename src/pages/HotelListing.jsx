import HeaderInner from './../components/sections/HeaderInner/HeaderInner';
import SearchForm from "../components/blocks/SearchForm/SearchForm";
import Footer from "../components/sections/Footer/Footer";

const HotelListing = () => {
    return (
        <>
            <HeaderInner />
            <main className="listing">
                <div className="listing-form">
                    <div className="container">
                        <SearchForm page="hotel-listing" />
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
                                            <h4 className="filter-item__title">Freebies</h4>
                                            <button
                                                className="filter-item__button"
                                                type="button"
                                                accordeon-button="Freebies"
                                            >
                                                <svg width={24} height={24}>
                                                    <use href="#arrow-down" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div
                                            className="filter-item__content filter-item__content--column"
                                            accordeon-content="Freebies"
                                        >
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Free breakfast</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Free parking</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Free internet</div>
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
                                                        Free airport shuttle
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Free cancellation</div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-item">
                                        <div className="filter-item__header">
                                            <h4 className="filter-item__title">Amenities</h4>
                                            <button
                                                className="filter-item__button"
                                                type="button"
                                                accordeon-button="Amenities"
                                            >
                                                <svg width={24} height={24}>
                                                    <use href="#arrow-down" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div
                                            className="filter-item__content filter-item__content--column"
                                            accordeon-content="Amenities"
                                        >
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> 24hr front desk</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Air-conditioned</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Fitness</div>
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value"> Pool</div>
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
                                                <div className="tabs__item-title">Hotels</div>
                                                <div className="tabs__item-subtitle">257 places</div>
                                            </div>
                                        </button>
                                        <button
                                            className="tabs__item"
                                            type="button"
                                            style={{ width: "calc(100% / 3)" }}
                                        >
                                            <div className="tabs__item-content">
                                                <div className="tabs__item-title">Motels</div>
                                                <div className="tabs__item-subtitle">51 places</div>
                                            </div>
                                        </button>
                                        <button
                                            className="tabs__item"
                                            type="button"
                                            style={{ width: "calc(100% / 3)" }}
                                        >
                                            <div className="tabs__item-content">
                                                <div className="tabs__item-title">Resorts</div>
                                                <div className="tabs__item-subtitle">72 places</div>
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
                                        <div className="hotel-card">
                                            <div className="hotel-card__image">
                                                {" "}
                                                <img
                                                    src="./img/hotels/hotel-example-1/cover.jpg"
                                                    alt="hotel"
                                                />
                                            </div>
                                            <div className="hotel-card__content">
                                                <div className="hotel-card__info">
                                                    <div className="hotel-card__info-left">
                                                        <div className="hotel-card__title">
                                                            CVK Park Bosphorus Hotel Istanbul
                                                        </div>
                                                        <div className="hotel-card__details">
                                                            <div className="location location--hotel-card">
                                                                <div className="location__icon">
                                                                    <svg width={18} height={18}>
                                                                        <use href="#location" />
                                                                    </svg>
                                                                </div>
                                                                <a className="location__link" href="#!">
                                                                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                                                                </a>
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
                                                    <div className="hotel-card__info-right">
                                                        <div className="hotel-card__info-right">
                                                            <div className="hotel-card__price">
                                                                <div className="hotel-card__price-notice">
                                                                    starting from
                                                                </div>
                                                                <div className="price">
                                                                    <span className="price-value">$240</span>
                                                                    <span className="price-period">/night</span>
                                                                </div>
                                                                <div className="hotel-card__price-notice">
                                                                    excl. tax
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hotel-card__buttons">
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
                                                        style={{ width: 428 }}
                                                    >
                                                        View Place
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hotel-card">
                                            <div className="hotel-card__image">
                                                {" "}
                                                <img
                                                    src="./img/hotels/hotel-example-2/cover.jpg"
                                                    alt="hotel"
                                                />
                                            </div>
                                            <div className="hotel-card__content">
                                                <div className="hotel-card__info">
                                                    <div className="hotel-card__info-left">
                                                        <div className="hotel-card__title">
                                                            Eresin Hotels Sultanahmet - Boutique Class
                                                        </div>
                                                        <div className="hotel-card__details">
                                                            <div className="location location--hotel-card">
                                                                <div className="location__icon">
                                                                    <svg width={18} height={18}>
                                                                        <use href="#location" />
                                                                    </svg>
                                                                </div>
                                                                <a className="location__link" href="#!">
                                                                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                                                                </a>
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
                                                    <div className="hotel-card__info-right">
                                                        <div className="hotel-card__info-right">
                                                            <div className="hotel-card__price">
                                                                <div className="hotel-card__price-notice">
                                                                    starting from
                                                                </div>
                                                                <div className="price">
                                                                    <span className="price-value">$240</span>
                                                                    <span className="price-period">/night</span>
                                                                </div>
                                                                <div className="hotel-card__price-notice">
                                                                    excl. tax
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hotel-card__buttons">
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
                                                        style={{ width: 428 }}
                                                    >
                                                        View Place
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hotel-card">
                                            <div className="hotel-card__image">
                                                {" "}
                                                <img
                                                    src="./img/hotels/hotel-example-3/cover.jpg"
                                                    alt="hotel"
                                                />
                                            </div>
                                            <div className="hotel-card__content">
                                                <div className="hotel-card__info">
                                                    <div className="hotel-card__info-left">
                                                        <div className="hotel-card__title">
                                                            Eresin Hotels Sultanahmet - Boutique Class
                                                        </div>
                                                        <div className="hotel-card__details">
                                                            <div className="location location--hotel-card">
                                                                <div className="location__icon">
                                                                    <svg width={18} height={18}>
                                                                        <use href="#location" />
                                                                    </svg>
                                                                </div>
                                                                <a className="location__link" href="#!">
                                                                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                                                                </a>
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
                                                    <div className="hotel-card__info-right">
                                                        <div className="hotel-card__info-right">
                                                            <div className="hotel-card__price">
                                                                <div className="hotel-card__price-notice">
                                                                    starting from
                                                                </div>
                                                                <div className="price">
                                                                    <span className="price-value">$240</span>
                                                                    <span className="price-period">/night</span>
                                                                </div>
                                                                <div className="hotel-card__price-notice">
                                                                    excl. tax
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hotel-card__buttons">
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
                                                        style={{ width: 428 }}
                                                    >
                                                        View Place
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hotel-card">
                                            <div className="hotel-card__image">
                                                {" "}
                                                <img
                                                    src="./img/hotels/hotel-example-4/cover.jpg"
                                                    alt="hotel"
                                                />
                                            </div>
                                            <div className="hotel-card__content">
                                                <div className="hotel-card__info">
                                                    <div className="hotel-card__info-left">
                                                        <div className="hotel-card__title">
                                                            Eresin Hotels Sultanahmet - Boutique Class
                                                        </div>
                                                        <div className="hotel-card__details">
                                                            <div className="location location--hotel-card">
                                                                <div className="location__icon">
                                                                    <svg width={18} height={18}>
                                                                        <use href="#location" />
                                                                    </svg>
                                                                </div>
                                                                <a className="location__link" href="#!">
                                                                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                                                                </a>
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
                                                    <div className="hotel-card__info-right">
                                                        <div className="hotel-card__info-right">
                                                            <div className="hotel-card__price">
                                                                <div className="hotel-card__price-notice">
                                                                    starting from
                                                                </div>
                                                                <div className="price">
                                                                    <span className="price-value">$240</span>
                                                                    <span className="price-period">/night</span>
                                                                </div>
                                                                <div className="hotel-card__price-notice">
                                                                    excl. tax
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hotel-card__buttons">
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
                                                        style={{ width: 428 }}
                                                    >
                                                        View Place
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

export default HotelListing;