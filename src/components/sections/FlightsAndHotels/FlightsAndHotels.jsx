import './FlightsAndHotels.scss';
import FlightsAndHotelsCard from './FlightsAndHotelsCard';

const FlightsAndHotels = () => {

    const flightsAndHotelsCards = [
        {
            id: 0,
            title: 'Flights',
            description: 'Search Flights & Places Hire to our most popular destinations',
            btnText: 'Show Filghts',
            style: 'flights',
        },
        {
            id: 1,
            title: 'Hotels',
            description: 'Search Hotels & Places Hire to our most popular destinations',
            btnText: 'Show Hotels',
            style: 'hotels',
        },
    ]

    return (
        <section className="flights-and-hotels">
            <div className="container">
                <div className="flights-and-hotels__cards">
                    {flightsAndHotelsCards.map((flightsAndHotelsCard) => {
                        return (
                            <FlightsAndHotelsCard
                                key={flightsAndHotelsCard.id}
                                title={flightsAndHotelsCard.title}
                                description={flightsAndHotelsCard.description}
                                btnText={flightsAndHotelsCard.btnText}
                                style={flightsAndHotelsCard.style}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default FlightsAndHotels;