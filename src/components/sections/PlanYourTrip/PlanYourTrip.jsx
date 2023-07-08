import './PlanYourTrip.scss';
import PlanYourTripCard from './PlanYourTripCard';
import SectionHeader from '../../blocks/SectionHeader/SectionHeader';
import { useState, useRef } from 'react';
import destinations from './../../../data/destinations';
import { scrollToRef } from '../../../utils/functions';

const PlanYourTrip = () => {
    const [numberOfCards, setNumberOfCards] = useState(9)
    const tripRef = useRef(null);

    return (
        <section className="plan-your-trip" ref={tripRef}>
            <div className="container">
                <SectionHeader
                    title="Plan your perfect trip"
                    text="Search Flights & Places Hire to our most popular destinations"
                    button="See more places"
                    action={() => {
                        if (destinations.length > numberOfCards) {
                            setNumberOfCards(numberOfCards + 3);
                            setTimeout(() => { scrollToRef(tripRef, 'end') }, 50);
                        }
                    }}
                />
                <div className="plan-your-trip__cards">
                    {destinations.map((item, index) => {
                        if (index < numberOfCards) {
                            return (
                                <PlanYourTripCard
                                    key={item.id}
                                    title={`${item.city}, ${item.country}`}
                                    img={item.image}
                                    from={item.city}
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