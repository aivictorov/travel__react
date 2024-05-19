import './FlightPolicies.scss';

const FlightPolicies = () => {
    return (
        <section className="flight-policies">
            <div className="flight-policies__background">
                <h2 className="flight-policies__title">
                    Emirates Airlines Policies
                </h2>
                <ul className="flight-policies__list">
                    <li className="flight-policies__item">
                        <div className="flight-policies__item-icon">
                            <svg width={24} height={24}>
                                <use href="#stopwatch" />
                            </svg>
                        </div>
                        <div className="flight-policies__item-title">
                            Pre-flight cleaning, installation of cabin HEPA filters.
                        </div>
                    </li>
                    <li className="flight-policies__item">
                        <div className="flight-policies__item-icon">
                            <svg width={24} height={24}>
                                <use href="#stopwatch" />
                            </svg>
                        </div>
                        <div className="flight-policies__item-title">
                            Pre-flight health screening questions.
                        </div>
                    </li>
                    <li className="flight-policies__item">
                        <div className="flight-policies__item-icon">
                            <svg width={24} height={24}>
                                <use href="#stopwatch" />
                            </svg>
                        </div>
                        <div className="flight-policies__item-title">
                            Pre-flight health screening questions.
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default FlightPolicies;