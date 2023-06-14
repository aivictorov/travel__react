import './HotelListingCard.scss';

const HotelListingCard = () => {
    return (
        <>
            <div className="hotel-card">
                <div className="hotel-card__image">
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
        </>
    );
}

export default HotelListingCard;