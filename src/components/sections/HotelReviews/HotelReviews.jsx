import './HotelReviews.scss';
import { useContext } from 'react';
import { AppContext } from './../../../App';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const HotelReviews = () => {
    const { reviews, users } = useContext(AppContext);
    const { hotelID } = useParams();

    const reviewsList = reviews.filter((review) => {
        return review.hotelID == hotelID;
    })

    const [page, setPage] = useState(1);

    const numberOfPages = Math.ceil(reviewsList.length / 5)

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
                    <span>{`${reviewsList.length} verified reviews`}</span>
                </div>
            </div>
            <ul className="hotel-reviews__list">

                {reviewsList.map((review, index) => {
                    const user = users.find((user) => { return user.id === review.userID });

                    return (
                        (index >= ((page - 1) * 5) && index < (page * 5)) &&
                        <li
                            className="hotel-reviews__item"
                            key={index}
                        >
                            <div className="hotel-reviews__item-image">
                                <img
                                    src={user.account.avatar}
                                    alt="user-avatar"
                                />
                            </div>
                            <div className="hotel-reviews__item-content">
                                <div className="hotel-reviews__item-title">
                                    <div className="hotel-reviews__item-rating">{`${review.rating} Amazing`}</div>
                                    <span>|</span>
                                    <div className="hotel-reviews__item-author">{user.account.name}</div>
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
                    )

                })}
            </ul>

            {numberOfPages > 1 &&
                <div className="hotel-reviews__pagination">
                    <div className="hotel-reviews__pagination-button-wrapper">
                        {page !== 1 &&
                            <button
                                type="buton"
                                onClick={() => { setPage(page - 1) }}
                            >
                                <svg width={24} height={24}>
                                    <use href="#arrow-left" />
                                </svg>
                            </button>
                        }
                    </div>
                    {page} of {numberOfPages}
                    <div className="hotel-reviews__pagination-button-wrapper">
                        {page !== numberOfPages &&
                            <button
                                type="buton"
                                onClick={() => { setPage(page + 1) }}
                            >
                                <svg width={24} height={24}>
                                    <use href="#arrow-right" />
                                </svg>
                            </button>
                        }
                    </div>
                </div>
            }
        </section>
    );
}

export default HotelReviews;