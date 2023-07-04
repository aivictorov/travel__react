import './PlanYourTrip.scss';
import PlanYourTripCard from './PlanYourTripCard';
import planYourTripCardImg01 from './../../../img/sections/plan-your-trip/01.jpg';
import planYourTripCardImg02 from './../../../img/sections/plan-your-trip/02.jpg';
import planYourTripCardImg03 from './../../../img/sections/plan-your-trip/03.jpg';
import planYourTripCardImg04 from './../../../img/sections/plan-your-trip/04.jpg';
import planYourTripCardImg05 from './../../../img/sections/plan-your-trip/05.jpg';
import planYourTripCardImg06 from './../../../img/sections/plan-your-trip/06.jpg';
import planYourTripCardImg07 from './../../../img/sections/plan-your-trip/07.jpg';
import planYourTripCardImg08 from './../../../img/sections/plan-your-trip/08.jpg';
import planYourTripCardImg09 from './../../../img/sections/plan-your-trip/09.jpg';
import SectionHeader from '../../blocks/SectionHeader/SectionHeader';
import { useState, useRef } from 'react';

const PlanYourTrip = () => {

    const [numberOfCards, setNumberOfCards] = useState(9)

    const cards = [
        {
            id: 0,
            title: 'Istanbul, Turkey',
            img: planYourTripCardImg01,
            from: 'Istanbul',
        },
        {
            id: 1,
            title: 'Sydney, Australia',
            img: planYourTripCardImg02,
            from: 'Sydney',
        },
        {
            id: 2,
            title: 'Baku, Azerbaijan',
            img: planYourTripCardImg03,
            from: 'Baku',
        },
        {
            id: 3,
            title: 'Male, Maldives',
            img: planYourTripCardImg04,
            from: 'Male',
        },
        {
            id: 4,
            title: 'Paris, France',
            img: planYourTripCardImg05,
            from: 'Paris',
        },
        {
            id: 5,
            title: 'New York, US',
            img: planYourTripCardImg06,
            from: 'New York',
        },
        {
            id: 6,
            title: 'London, UK',
            img: planYourTripCardImg07,
            from: 'London',
        },
        {
            id: 7,
            title: 'Tokyo, Japan',
            img: planYourTripCardImg08,
            from: 'Tokyo',
        },
        {
            id: 8,
            title: 'Dubai, UAE',
            img: planYourTripCardImg09,
            from: 'Dubai',
        },
        {
            id: 9,
            title: 'London, UK',
            img: planYourTripCardImg07,
            from: 'London',
        },
        {
            id: 10,
            title: 'Tokyo, Japan',
            img: planYourTripCardImg08,
            from: 'Tokyo',
        },
        {
            id: 11,
            title: 'Dubai, UAE',
            img: planYourTripCardImg09,
            from: 'Dubai',
        },
        {
            id: 12,
            title: 'London, UK',
            img: planYourTripCardImg07,
            from: 'London',
        },
        {
            id: 13,
            title: 'Tokyo, Japan',
            img: planYourTripCardImg08,
            from: 'Tokyo',
        },
        {
            id: 14,
            title: 'Dubai, UAE',
            img: planYourTripCardImg09,
            from: 'Dubai',
        },
    ];

    const tripCardsRef = useRef(null);

    function scrollToRef() {
        tripCardsRef.current.scrollIntoView({ block: 'end' });
    };

    return (
        <section className="plan-your-trip">
            <div className="container">
                <SectionHeader
                    title="Plan your perfect trip"
                    text="Search Flights & Places Hire to our most popular destinations"
                    button="See more places"
                    action={() => {
                        (cards.length > numberOfCards) && setNumberOfCards(numberOfCards + 3);
                        setTimeout(scrollToRef, 50);
                    }}
                />
                <div
                    className="plan-your-trip__cards"
                    ref={tripCardsRef}
                >
                    {cards.map((card, index) => {
                        if (index < numberOfCards) {
                            return (
                                <PlanYourTripCard
                                    key={card.id}
                                    title={card.title}
                                    img={card.img}
                                    from={card.from}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    );
}

export default PlanYourTrip;