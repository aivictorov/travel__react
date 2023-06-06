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

const PlanYourTrip = () => {

    const planYourTripCards = [
        {
            id: 0,
            title: 'Istanbul, Turkey',
            img: planYourTripCardImg01,
        },
        {
            id: 1,
            title: 'Sydney, Australia',
            img: planYourTripCardImg02,
        },
        {
            id: 2,
            title: 'Baku, Azerbaijan',
            img: planYourTripCardImg03,
        },
        {
            id: 3,
            title: 'Malé, Maldives',
            img: planYourTripCardImg04,
        },
        {
            id: 4,
            title: 'Paris, France',
            img: planYourTripCardImg05,
        },
        {
            id: 5,
            title: 'New York, US',
            img: planYourTripCardImg06,
        },
        {
            id: 6,
            title: 'London, UK',
            img: planYourTripCardImg07,
        },
        {
            id: 7,
            title: 'Tokyo, Japan',
            img: planYourTripCardImg08,
        },
        {
            id: 8,
            title: 'Dubai, UAE',
            img: planYourTripCardImg09,
        },
    ]

    return (
        <section className="plan-your-trip">
            <div className="container">
                <div className="section-header">
                    <div className="section-header__left">
                        <h2 className="section-header__title">Plan your perfect trip</h2>
                        <div className="section-header__subtitle">
                            Search Flights &amp; Places Hire to our most popular destinations
                        </div>
                    </div>
                    <div className="section-header__right">
                        <button className="button button--border button--h40" type="button">
                            See more places
                        </button>
                    </div>
                </div>
                <div className="plan-your-trip__cards">

                    {planYourTripCards.map((planYourTripCard) => {
                        return (
                            <PlanYourTripCard
                                key={planYourTripCard.id}
                                title={planYourTripCard.title}
                                img={planYourTripCard.img}
                            />
                        )
                    })}



                </div>
            </div>
        </section>
    );
}

export default PlanYourTrip;