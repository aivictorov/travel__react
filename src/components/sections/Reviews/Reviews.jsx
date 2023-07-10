import 'swiper/css';
import './Reviews.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ReviewCard from "./ReviewCard";
import SectionHeader from './../../blocks/SectionHeader/SectionHeader';
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
        {
            id: 3,
            title: '“The facilities are superb. Clean, slick, bright.”',
            description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            author: 'Olga',
            object: 'Weave Studios – Kai Tak',
            img: reviewCardImg01,
        },
        {
            id: 4,
            title: '“The facilities are superb. Clean, slick, bright.”',
            description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            author: 'Olga',
            object: 'Weave Studios – Kai Tak',
            img: reviewCardImg02,
        },
        {
            id: 5,
            title: '“A real sense of community, nurtured”',
            description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            author: 'Thomas',
            object: 'Weave Studios – Olympic',
            img: reviewCardImg03,
        },
        {
            id: 6,
            title: '“The facilities are superb. Clean, slick, bright.”',
            description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            author: 'Olga',
            object: 'Weave Studios – Kai Tak',
            img: reviewCardImg01,
        },
        {
            id: 7,
            title: '“A real sense of community, nurtured”',
            description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            author: 'Thomas',
            object: 'Weave Studios – Olympic',
            img: reviewCardImg02,
        },
        {
            id: 8,
            title: '“The facilities are superb. Clean, slick, bright.”',
            description: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
            author: 'Olga',
            object: 'Weave Studios – Kai Tak',
            img: reviewCardImg03,
        },
    ]

    return (
        <section className="reviews-section">
            <div className="container">
                <SectionHeader
                    title="Reviews"
                    text="What people says about Golobe facilities"
                    button="See All"
                />
            </div>
            <div className="container-right">
                <div className="reviews-section__cards">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={56}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        speed={2500}
                    >
                        {reviewCards.map((reviewCard) => {
                            return (
                                <SwiperSlide>
                                    <ReviewCard
                                        key={reviewCard.id}
                                        title={reviewCard.title}
                                        description={reviewCard.description}
                                        author={reviewCard.author}
                                        object={reviewCard.object}
                                        img={reviewCard.img}
                                    />
                                </SwiperSlide>

                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Reviews;