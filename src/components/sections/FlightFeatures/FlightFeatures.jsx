import Checkbox from '../../elements/Checkbox/Checkbox';
import './FlightFeatures.scss';

const FlightFeatures = ({ gallery }) => {

    const checkboxes = ['Economy', 'First Class', 'Busines Class']

    return (
        <section className="flight-features">
            <div className="flight-features__header">
                <h2 className="flight-features__title">Basic Economy Features</h2>
                <div className="flight-features__checkboxes">
                    {checkboxes.map((item) => {
                        return (
                            <Checkbox name={item} />
                        )
                    })}
                </div>
            </div>
            <div className="flight-features__gallery">
                {gallery.map((item, index) => {
                    return (
                        <div className="flight-features__image">
                            <img
                                key={index}
                                src={item}
                                alt="flight feature"
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default FlightFeatures;