import './Reviews.scss';
import ReviewCard from "./ReviewCard";

import reviewCardImg01 from './../../../img/sections/reviews-section/01.jpg';
import reviewCardImg02 from './../../../img/sections/reviews-section/02.jpg';
import reviewCardImg03 from './../../../img/sections/reviews-section/02.jpg';

const Reviews = () => {

    const reviewCards = [
        {
            id: 0,
            title: '“A real sense of community, nurtured”',
            description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            author: 'Olga',
            object: 'Weave Studios – Kai Tak',
            img: reviewCardImg01,
        },
        {
            id: 1,
            title: '“The facilities are superb. Clean, slick, bright.”',
            description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            author: 'Olga',
            object: 'Weave Studios – Kai Tak',
            img: reviewCardImg02,
        },
        {
            id: 2,
            title: '“A real sense of community, nurtured”',
            description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            author: 'Thomas',
            object: 'Weave Studios – Olympic',
            img: reviewCardImg03,
        },
    ]

    return (
        <section className="reviews-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-header__left">
                        <h2 className="section-header__title">Reviews</h2>
                        <div className="section-header__subtitle">
                            What people says about Golobe facilities
                        </div>
                    </div>
                    <div className="section-header__right">
                        <button className="button button--border button--h40" type="button">
                            See All
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-right">
                <div className="reviews-section__cards owl-carousel owl-theme">
                    {reviewCards.map((reviewCard) => {
                        return (
                            <ReviewCard
                                key={reviewCard.id}
                                title={reviewCard.title}
                                description={reviewCard.description}
                                author={reviewCard.author}
                                object={reviewCard.object}
                                img={reviewCard.img}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Reviews;