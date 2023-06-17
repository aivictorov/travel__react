import './FlightTicket.scss';
import Price from './../../elements/Price/Price';

const FlightTicket = ({ layout }) => {
    let addClass = '';
    if (layout === 'booking') addClass = " flight-ticket--booking";

    const services = [
        { name: '', svgID: 'flight-icon' },
        { name: '', svgID: 'wifi' },
        { name: '', svgID: 'stopwatch' },
        { name: '', svgID: 'food' },
        { name: '', svgID: 'seat' },
    ];

    return (
        <div className={`flight-ticket${addClass}`}>
            {layout === 'booking' &&
                <div className="flight-ticket__header">
                    <div className="flight-ticket__title">
                        Emirates A380 Airbus
                    </div>
                    <Price value="240" period="night" style="big" />
                </div>
            }
            <div className="flight-ticket__content">
                <div className="flight-ticket__content-top">
                    <div className="flight-ticket__date">
                        Return Wed, Dec 8
                    </div>
                    <div className="flight-ticket__duration">
                        2h 28m
                    </div>
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
                        {services.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flight-ticket__service-item"
                                >
                                    <svg width={24} height={24}>
                                        <use href={`#${item.svgID}`} />
                                    </svg>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flight-ticket__content-bottom">
                    <div className="flight-ticket__time">
                        <span>12:00 pm</span>
                        <span>Newark (EWR)</span>
                    </div>
                    <div className="flight-ticket__spacer">
                        <svg width={48} height={48}>
                            <use href="#flight-icon" />
                        </svg>
                    </div>
                    <div className="flight-ticket__time">
                        <span>12:00 pm</span>
                        <span>Newark (EWR)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightTicket;