import './FlightTicket.scss';

const FlightTicket = () => {
    return ( 

        <div className="flight-ticket">
        <div className="flight-ticket__header">
            <div className="flight-ticket__title">Emirates A380 Airbus</div>
            <div className="price">
                <span className="price-value price-value--big">$240</span>
                <span className="price-period">/night</span>
            </div>
        </div>
        <div className="flight-ticket__content">
            <div className="flight-ticket__content-top">
                <div className="flight-ticket__date flight-ticket__date--booking-page">
                    Return Wed, Dec 8
                </div>
                <div className="flight-ticket__duration">2h 28m</div>
            </div>
            <div className="flight-ticket__content-middle">
                <div className="flight-ticket__airline">
                    <div className="flight-ticket__airline-logo">
                        <img
                            src="./img/flights/airline-example-1/logo.png"
                            alt="airline-logo"
                        />
                    </div>
                    <div className="flight-ticket__airline-text">
                        <span>Emirates </span>
                        <span>Airbus A320</span>
                    </div>
                </div>
                <ul className="flight-ticket__service-list">
                    <li className="flight-ticket__service-item">
                        <svg width={24} height={24}>
                            <use href="#flight-icon" />
                        </svg>
                    </li>
                    <li className="flight-ticket__service-item">
                        <svg width={24} height={24}>
                            <use href="#wifi" />
                        </svg>
                    </li>
                    <li className="flight-ticket__service-item">
                        <svg width={24} height={24}>
                            <use href="#stopwatch" />
                        </svg>
                    </li>
                    <li className="flight-ticket__service-item">
                        <svg width={24} height={24}>
                            <use href="#food" />
                        </svg>
                    </li>
                    <li className="flight-ticket__service-item">
                        <svg width={24} height={24}>
                            <use href="#seat" />
                        </svg>
                    </li>
                </ul>
            </div>
            <div className="flight-ticket__content-bottom flight-ticket__content-bottom--booking-page">
                <div className="flight-ticket__time">
                    <span>12:00 pm</span>
                    <span>Newark(EWR)</span>
                </div>
                <div className="flight-ticket__spacer">
                    <svg width={48} height={48}>
                        <use href="#flight-icon" />
                    </svg>
                </div>
                <div className="flight-ticket__time">
                    <span>12:00 pm</span>
                    <span>Newark(EWR)</span>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default FlightTicket;