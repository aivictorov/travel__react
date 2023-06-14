import './HotelReviews.scss';

const HotelReviews = () => {
    return (
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
    );
}

export default HotelReviews;