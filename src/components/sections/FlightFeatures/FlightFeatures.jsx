import './FlightFeatures.scss';

const FlightFeatures = () => {
    return ( 

        <section className="flight-features">
        <div className="flight-features__header">
            <h2 className="flight-features__title">Basic Economy Features</h2>
            <div className="flight-features__checkboxes">
                <div className="checkbox">
                    <label className="checkbox__label">
                        <input
                            className="checkbox__hidden visually-hidden"
                            type="checkbox"
                        />
                        <div className="checkbox__custom" />
                        <div className="checkbox__value">Economy</div>
                    </label>
                </div>
                <div className="checkbox">
                    <label className="checkbox__label">
                        <input
                            className="checkbox__hidden visually-hidden"
                            type="checkbox"
                        />
                        <div className="checkbox__custom" />
                        <div className="checkbox__value">First Class</div>
                    </label>
                </div>
                <div className="checkbox">
                    <label className="checkbox__label">
                        <input
                            className="checkbox__hidden visually-hidden"
                            type="checkbox"
                        />
                        <div className="checkbox__custom" />
                        <div className="checkbox__value">Busines Class</div>
                    </label>
                </div>
            </div>
        </div>
        <div className="flight-features__gallery">
            <div className="flight-features__image">
                <img
                    src="./img/flights/airline-example-1/gallery/01.jpg"
                    alt="flight feature"
                />
            </div>
            <div className="flight-features__image">
                <img
                    src="./img/flights/airline-example-1/gallery/02.jpg"
                    alt="flight feature"
                />
            </div>
            <div className="flight-features__image">
                <img
                    src="./img/flights/airline-example-1/gallery/03.jpg"
                    alt="flight feature"
                />
            </div>
            <div className="flight-features__image">
                <img
                    src="./img/flights/airline-example-1/gallery/04.jpg"
                    alt="flight feature"
                />
            </div>
            <div className="flight-features__image">
                <img
                    src="./img/flights/airline-example-1/gallery/05.jpg"
                    alt="flight feature"
                />
            </div>
            <div className="flight-features__image">
                <img
                    src="./img/flights/airline-example-1/gallery/06.jpg"
                    alt="flight feature"
                />
            </div>
            <div className="flight-features__image">
                <img
                    src="./img/flights/airline-example-1/gallery/07.jpg"
                    alt="flight feature"
                />
            </div>
            <div className="flight-features__image">
                <img
                    src="./img/flights/airline-example-1/gallery/08.jpg"
                    alt="flight feature"
                />
            </div>
            <div className="flight-features__image">
                <img
                    src="./img/flights/airline-example-1/gallery/09.jpg"
                    alt="flight feature"
                />
            </div>
        </div>
    </section>


     );
}

export default FlightFeatures;