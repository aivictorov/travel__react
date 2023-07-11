import './ReviewCard.scss';

const ReviewCard = ({ title, description, author, object, img }) => {
    return (
        <div className="reviews-section-card">
            <div className="reviews-section-card__content">
                <div className="reviews-section-card__title">
                    {title}
                </div>
                <div className="reviews-section-card__text">
                    {description}
                </div>
                <a className="reviews-section-card__link" href="#">
                    View more
                </a>
            </div>
            <div className="reviews-section-card__rating">
                <div className="reviews-section-card__stars">
                    <svg width={24} height={24}>
                        <use href="#star-icon" />
                    </svg>
                    <svg width={24} height={24}>
                        <use href="#star-icon" />
                    </svg>
                    <svg width={24} height={24}>
                        <use href="#star-icon" />
                    </svg>
                    <svg width={24} height={24}>
                        <use href="#star-icon" />
                    </svg>
                    <svg width={24} height={24}>
                        <use href="#star-icon" />
                    </svg>
                </div>
                <div className="reviews-section-card__author">
                    {author}
                </div>
                <div className="reviews-section-card__place">
                    {object}
                </div>
                <div className="reviews-section-card__google-link">
                    <svg width={24} height={24}>
                        <use href="#google-icon" />
                    </svg>
                    Google
                </div>
            </div>
            <div className="reviews-section-card__image">
                <img
                    src={img}
                    alt={title}
                />
            </div>
        </div>
    );
}

export default ReviewCard;