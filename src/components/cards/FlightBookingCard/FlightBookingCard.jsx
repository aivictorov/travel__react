import './FlightBookingCard.scss';
import Price from '../../elements/Price/Price';
import { formatTime, countDuration, formatWeekDay } from '../../../utils/dateTimeFunctions';
import { addClass } from '../../../utils/functions';

const FlightBookingCard = ({ layout, direction, flight }) => {
    const add = addClass('flight-ticket', layout)

    const weekDay = formatWeekDay(flight.start);

    const services = [
        { name: '', svgID: 'flight-icon' },
        { name: '', svgID: 'wifi' },
        { name: '', svgID: 'stopwatch' },
        { name: '', svgID: 'food' },
        { name: '', svgID: 'seat' },
    ];

    return (
        <div className={'flight-ticket' + add}>
            {layout === 'booking' &&
                <div className="flight-ticket__header">
                    <div className="flight-ticket__title">
                        Emirates A380 Airbus
                    </div>
                    <Price value="240" style="big" />
                </div>
            }
            <div className="flight-ticket__content">
                <div className="flight-ticket__content-top">
                    <div className="flight-ticket__date">
                        {direction}: {weekDay}
                    </div>
                    <div className="flight-ticket__duration">
                        {countDuration(flight.start, flight.end)}
                    </div>
                </div>
                <div className="flight-ticket__content-middle">
                    <div className="flight-ticket__airline">
                        <div className="flight-ticket__airline-logo">
                            <img
                                src={flight.logo}
                                alt="airline-logo"
                            />
                        </div>
                        <div className="flight-ticket__airline-text">
                            <span>{flight.airline}</span>
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
                        <span>{formatTime(flight.start)} pm</span>
                        <span>{flight.from} (EWR)</span>
                    </div>
                    <div className="flight-ticket__spacer">
                        <svg width={48} height={48}>
                            <use href="#flight-icon" />
                        </svg>
                    </div>
                    <div className="flight-ticket__time">
                        <span>{formatTime(flight.end)} pm</span>
                        <span>{flight.to} (EWR)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightBookingCard;