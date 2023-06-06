import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";

const HotelDetails = () => {
    return (
        <>
            <HeaderInner />
            <main className="details">
                <div className="container">
                    <div className="details__nav">
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
                    <div className="details__header">
                        <div className="details-header">
                            <div className="details-header__content">
                                <div className="details-header__left">
                                    <div className="details-header__main">
                                        <div className="details-header__main-title">
                                            CVK Park Bosphorus Hotel Istanbul
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
                                    </div>
                                    <div className="details-header__details">
                                        <div className="location">
                                            <div className="location__icon">
                                                <svg width={18} height={18}>
                                                    <use href="#location" />
                                                </svg>
                                            </div>
                                            <a className="location__link" href="#!">
                                                Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                                            </a>
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
                                <div className="details-header__right">
                                    <div className="price">
                                        <span className="price-value price-value--big">$240</span>
                                        <span className="price-period">/night</span>
                                    </div>
                                    <div className="details-header__buttons">
                                        <div className="fav-checkbox">
                                            <label className="fav-checkbox__label">
                                                <input
                                                    className="fav-checkbox__hidden visually-hidden"
                                                    type="checkbox"
                                                />
                                                <div className="fav-checkbox__custom" style={{ width: 48 }}>
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
                                            className="square-button square-button--border"
                                            type="button"
                                            style={{ width: 48, height: 48 }}
                                        >
                                            <svg width={20} height={20}>
                                                <use href="#share" />
                                            </svg>
                                        </button>
                                        <button
                                            className="button button--bold"
                                            type="button"
                                            style={{ width: 150 }}
                                        >
                                            Book now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details__flight-content"></div>
                    <div className="details__hotel-content">
                        <section className="hotel-gallery">
                            {" "}
                            <img src="./img/hotels/hotel-example-1/gallery/01.jpg" alt="hotel" />
                            <img src="./img/hotels/hotel-example-1/gallery/02.jpg" alt="hotel" />
                            <img src="./img/hotels/hotel-example-1/gallery/03.jpg" alt="hotel" />
                            <img src="./img/hotels/hotel-example-1/gallery/04.jpg" alt="hotel" />
                            <img src="./img/hotels/hotel-example-1/gallery/05.jpg" alt="hotel" />
                            <div className="hotel-gallery__button">
                                <button className="button button--bold" type="button">
                                    View all photos
                                </button>
                            </div>
                        </section>
                        <section className="hotel-overview">
                            <h2 className="hotel-overview__title">Overview</h2>
                            <div className="hotel-overview__text">
                                <p>
                                    Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
                                    Bosphorus Hotel Istanbul has risen from the ashes of the historic
                                    Park Hotel, which also served as Foreign Affairs Palace 120 years
                                    ago and is hosting its guests by assuming this hospitality
                                    mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and
                                    fitness area, 18 meeting rooms including 4 dividable ones and 3
                                    terraces with Bosphorus view, Istanbuls largest terrace with
                                    Bosphorus view (4500 m2) and latest technology infrastructure, CVK
                                    Park Bosphorus Hotel Istanbul is destined to be the popular
                                    attraction point of the city. Room and suite categories at various
                                    sizes with city and Bosphorus view, as well as 68 separate luxury
                                    suites, are offered to its special guests as a wide variety of
                                    selection.
                                </p>
                            </div>
                            <ul className="hotel-overview__badge-list">
                                <li className="hotel-overview__first-badge">
                                    <div className="hotel-overview__first-badge-rating">4.2</div>
                                    <div className="hotel-overview__first-badge-text">
                                        <span>Very good</span>
                                        <span>371 reviews</span>
                                    </div>
                                </li>
                                <li className="hotel-overview__next-badge">
                                    <div className="hotel-overview__next-badge-icon">
                                        <svg width={32} height={32}>
                                            <use href="#stars-icon" />
                                        </svg>
                                    </div>
                                    <div className="hotel-overview__next-badge-text">Near park</div>
                                </li>
                                <li className="hotel-overview__next-badge">
                                    <div className="hotel-overview__next-badge-icon">
                                        <svg width={32} height={32}>
                                            <use href="#stars-icon" />
                                        </svg>
                                    </div>
                                    <div className="hotel-overview__next-badge-text">
                                        Near nightlife
                                    </div>
                                </li>
                                <li className="hotel-overview__next-badge">
                                    <div className="hotel-overview__next-badge-icon">
                                        <svg width={32} height={32}>
                                            <use href="#stars-icon" />
                                        </svg>
                                    </div>
                                    <div className="hotel-overview__next-badge-text">
                                        Near theater
                                    </div>
                                </li>
                                <li className="hotel-overview__next-badge">
                                    <div className="hotel-overview__next-badge-icon">
                                        <svg width={32} height={32}>
                                            <use href="#stars-icon" />
                                        </svg>
                                    </div>
                                    <div className="hotel-overview__next-badge-text">Clean Hotel</div>
                                </li>
                            </ul>
                        </section>
                        <section className="hotel-rooms">
                            <h2 className="hotel-rooms__title">Available rooms</h2>
                            <ul className="hotel-rooms__list">
                                <li className="hotel-rooms__item">
                                    <div className="hotel-rooms__item-left">
                                        <div className="hotel-rooms__item-image">
                                            <img
                                                src="./img/hotels/hotel-example-1/rooms/01.jpg"
                                                alt="available room"
                                            />
                                        </div>
                                        <div className="hotel-rooms__item-title">
                                            Superior room - 1 double bed or 2 twin beds
                                        </div>
                                    </div>
                                    <div className="hotel-rooms__item-right">
                                        <div className="hotel-rooms__item-price">
                                            {" "}
                                            <span>$240</span>/night
                                        </div>
                                        <button
                                            className="button button--bold"
                                            type="button"
                                            style={{ width: 150 }}
                                        >
                                            Book now
                                        </button>
                                    </div>
                                </li>
                                <li className="hotel-rooms__item">
                                    <div className="hotel-rooms__item-left">
                                        <div className="hotel-rooms__item-image">
                                            <img
                                                src="./img/hotels/hotel-example-1/rooms/02.jpg"
                                                alt="available room"
                                            />
                                        </div>
                                        <div className="hotel-rooms__item-title">
                                            Superior room - 1 double bed or 2 twin beds
                                        </div>
                                    </div>
                                    <div className="hotel-rooms__item-right">
                                        <div className="hotel-rooms__item-price">
                                            {" "}
                                            <span>$240</span>/night
                                        </div>
                                        <button
                                            className="button button--bold"
                                            type="button"
                                            style={{ width: 150 }}
                                        >
                                            Book now
                                        </button>
                                    </div>
                                </li>
                                <li className="hotel-rooms__item">
                                    <div className="hotel-rooms__item-left">
                                        <div className="hotel-rooms__item-image">
                                            <img
                                                src="./img/hotels/hotel-example-1/rooms/03.jpg"
                                                alt="available room"
                                            />
                                        </div>
                                        <div className="hotel-rooms__item-title">
                                            Superior room - 1 double bed or 2 twin beds
                                        </div>
                                    </div>
                                    <div className="hotel-rooms__item-right">
                                        <div className="hotel-rooms__item-price">
                                            {" "}
                                            <span>$240</span>/night
                                        </div>
                                        <button
                                            className="button button--bold"
                                            type="button"
                                            style={{ width: 150 }}
                                        >
                                            Book now
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <section className="hotel-location">
                            <div className="hotel-location__header">
                                <h2 className="hotel-location__title">Location/Map</h2>
                                <button className="button button--bold" type="button">
                                    View on google maps
                                </button>
                            </div>
                            <div className="hotel-location__map">
                                <img src="./img/hotels/map.jpg" alt="map" />
                            </div>
                            <div className="location">
                                <div className="location__icon">
                                    <svg width={18} height={18}>
                                        <use href="#location" />
                                    </svg>
                                </div>
                                <a className="location__link" href="#!">
                                    Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                                </a>
                            </div>
                        </section>
                        <section className="hotel-amenities">
                            <h2 className="hotel-amenities__title">Amenities</h2>
                            <ul className="hotel-amenities__list" style={{ maxHeight: 240 }}>
                                <li className="hotel-amenities__item">
                                    <div className="hotel-amenities__item-icon">
                                        <svg width={24} height={24}>
                                            <use href="#food" />
                                        </svg>
                                    </div>
                                    <div className="hotel-amenities__item-title">Outdoor pool</div>
                                </li>
                                <li className="hotel-amenities__item">
                                    <div className="hotel-amenities__item-icon">
                                        <svg width={24} height={24}>
                                            <use href="#wifi" />
                                        </svg>
                                    </div>
                                    <div className="hotel-amenities__item-title">Fitness center</div>
                                </li>
                                <li className="hotel-amenities__item">
                                    <div className="hotel-amenities__item-icon">
                                        <svg width={24} height={24}>
                                            <use href="#seat" />
                                        </svg>
                                    </div>
                                    <div className="hotel-amenities__item-title">Indoor pool</div>
                                </li>
                                <li className="hotel-amenities__item">
                                    <div className="hotel-amenities__item-icon">
                                        <svg width={24} height={24}>
                                            <use href="#food" />
                                        </svg>
                                    </div>
                                    <div className="hotel-amenities__item-title">Bar/Lounge</div>
                                </li>
                                <li className="hotel-amenities__item">
                                    <div className="hotel-amenities__item-icon">
                                        <svg width={24} height={24}>
                                            <use href="#wifi" />
                                        </svg>
                                    </div>
                                    <div className="hotel-amenities__item-title">
                                        Spa and wellness center
                                    </div>
                                </li>
                                <li className="hotel-amenities__item">
                                    <div className="hotel-amenities__item-icon">
                                        <svg width={24} height={24}>
                                            <use href="#food" />
                                        </svg>
                                    </div>
                                    <div className="hotel-amenities__item-title">Free Wi-Fi</div>
                                </li>
                                <li className="hotel-amenities__item">
                                    <div className="hotel-amenities__item-icon">
                                        <svg width={24} height={24}>
                                            <use href="#wifi" />
                                        </svg>
                                    </div>
                                    <div className="hotel-amenities__item-title">Restaurant</div>
                                </li>
                                <li className="hotel-amenities__item">
                                    <div className="hotel-amenities__item-icon">
                                        <svg width={24} height={24}>
                                            <use href="#wifi" />
                                        </svg>
                                    </div>
                                    <div className="hotel-amenities__item-title">
                                        Tea/coffee machine
                                    </div>
                                </li>
                                <li className="hotel-amenities__item">
                                    <div className="hotel-amenities__item-icon">
                                        <svg width={24} height={24}>
                                            <use href="#wifi" />
                                        </svg>
                                    </div>
                                    <div className="hotel-amenities__item-title">Room service</div>
                                </li>
                                <li className="hotel-amenities__item">
                                    <a className="hotel-amenities__link" href="#!">
                                        +24 more
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <section className="hotel-reviews">
                            <div className="hotel-reviews__header">
                                <h2 className="hotel-reviews__title">Reviews</h2>
                                <button className="button button--bold" type="button">
                                    Give your review
                                </button>
                            </div>
                            <div className="hotel-reviews__total-rating">
                                <div className="hotel-reviews__total-rating-number">4.2</div>
                                <div className="hotel-reviews__total-rating-description" />
                                <div className="hotel-reviews__total-rating-description">
                                    <span>Very good</span>
                                    <span>371 verified reviews</span>
                                </div>
                            </div>
                            <ul className="hotel-reviews__list">
                                <li className="hotel-reviews__item">
                                    <div className="hotel-reviews__item-image">
                                        <img src="./img/users/avatars/01.jpg" alt="user-avatar" />
                                    </div>
                                    <div className="hotel-reviews__item-content">
                                        <div className="hotel-reviews__item-title">
                                            <div className="hotel-reviews__item-rating">5.0 Amazing </div>
                                            <span>|</span>
                                            <div className="hotel-reviews__item-author">Kaiya Lubin</div>
                                        </div>
                                        <div className="hotel-reviews__item-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                    <div className="hotel-reviews__item-flag">
                                        <svg width={20} height={20}>
                                            <use href="#flag-icon" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="hotel-reviews__item">
                                    <div className="hotel-reviews__item-image">
                                        <img src="./img/users/avatars/02.jpg" alt="user-avatar" />
                                    </div>
                                    <div className="hotel-reviews__item-content">
                                        <div className="hotel-reviews__item-title">
                                            <div className="hotel-reviews__item-rating">5.0 Amazing </div>
                                            <span>|</span>
                                            <div className="hotel-reviews__item-author">Kaiya Lubin</div>
                                        </div>
                                        <div className="hotel-reviews__item-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                    <div className="hotel-reviews__item-flag">
                                        <svg width={20} height={20}>
                                            <use href="#flag-icon" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="hotel-reviews__item">
                                    <div className="hotel-reviews__item-image">
                                        <img src="./img/users/avatars/03.jpg" alt="user-avatar" />
                                    </div>
                                    <div className="hotel-reviews__item-content">
                                        <div className="hotel-reviews__item-title">
                                            <div className="hotel-reviews__item-rating">5.0 Amazing </div>
                                            <span>|</span>
                                            <div className="hotel-reviews__item-author">Kaiya Lubin</div>
                                        </div>
                                        <div className="hotel-reviews__item-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                    <div className="hotel-reviews__item-flag">
                                        <svg width={20} height={20}>
                                            <use href="#flag-icon" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="hotel-reviews__item">
                                    <div className="hotel-reviews__item-image">
                                        <img src="./img/users/avatars/04.jpg" alt="user-avatar" />
                                    </div>
                                    <div className="hotel-reviews__item-content">
                                        <div className="hotel-reviews__item-title">
                                            <div className="hotel-reviews__item-rating">4.9 Amazing </div>
                                            <span>|</span>
                                            <div className="hotel-reviews__item-author">Kaiya Lubin</div>
                                        </div>
                                        <div className="hotel-reviews__item-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                    <div className="hotel-reviews__item-flag">
                                        <svg width={20} height={20}>
                                            <use href="#flag-icon" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="hotel-reviews__item">
                                    <div className="hotel-reviews__item-image">
                                        <img src="./img/users/avatars/05.jpg" alt="user-avatar" />
                                    </div>
                                    <div className="hotel-reviews__item-content">
                                        <div className="hotel-reviews__item-title">
                                            <div className="hotel-reviews__item-rating">4.9 Amazing </div>
                                            <span>|</span>
                                            <div className="hotel-reviews__item-author">Kaiya Lubin</div>
                                        </div>
                                        <div className="hotel-reviews__item-text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                    </div>
                                    <div className="hotel-reviews__item-flag">
                                        <svg width={20} height={20}>
                                            <use href="#flag-icon" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                            <div className="hotel-reviews__pagination">
                                <a href="#!">
                                    <svg width={24} height={24}>
                                        <use href="#arrow-left" />
                                    </svg>
                                </a>
                                1 of 40
                                <a href="#!">
                                    <svg width={24} height={24}>
                                        <use href="#arrow-right" />
                                    </svg>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default HotelDetails;