import './AccountFlightCard.scss';
import Button from '../../elements/Button/Button';
import ButtonSquare from '../../elements/ButtonSquare/ButtonSquare';
import flights from './../../../data/flights';
import airlines from './../../../data/airlines';
import { countDuration, formatDate, formatTime, nextDaySign } from '../../../utils/dateTimeFunctions';

import calendarIcon from './../../../img/icons/ticket/calendar.svg';

const AccountFlightCard = ({ flightTicket }) => {

    let ids = [flightTicket.direct]
    if (flightTicket.return) ids.push(flightTicket.return)

    return (
        <div className="account-flight-card">

            {ids.map((id) => {
                const flight = flights.find((item) => item.id === id)
                const airlineLogo = airlines.find((item) => item.name === flight.airline).logo

                const features = [
                    { name: "Depart date", value: formatDate(flight.start) },
                    { name: "Arrive date", value: formatDate(flight.end) },
                    { name: "Flight time", value: countDuration(flight.start, flight.end) },
                    { name: "Price", value: flight.price + '$' },
                ];

                return (
                    <div
                        className="account-flight-card__flight"
                        key={id}
                    >
                        <div className="account-flight-card__icon">
                            <img
                                src={airlineLogo}
                                alt={flight.airline}
                            />
                        </div>
                        <div className="account-flight-card__info">
                            <div className="account-flight-card__time">
                                <div className="account-flight-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        {flight.from}
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        {formatTime(flight.start)}
                                    </div>
                                </div>
                                <div className="account-flight-card__time-spacer">—</div>
                                <div className="account-flight-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        {flight.to}
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        {formatTime(flight.end)}
                                        {" "}
                                        {nextDaySign(flight.start, flight.end)}
                                    </div>
                                </div>
                            </div>
                            <ul className="account-flight-card__features">
                                {features.map((feature) => {
                                    return (
                                        <li
                                            className="account-flight-card__feature"
                                            key={feature.name}
                                        >
                                            <div className="account-flight-card__feature-icon">
                                                <img src={calendarIcon} alt="icon" />
                                            </div>
                                            <div className="account-flight-card__feature-content">
                                                <div className="account-flight-card__feature-title">
                                                    {feature.name}
                                                </div>
                                                <div className="account-flight-card__feature-value">
                                                    {feature.value}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="account-flight-card__buttons">
                            <Button text="Download Ticket" />
                            <ButtonSquare
                                style="border small"
                                svgID="arrow-right"
                            />
                        </div>
                    </div>
                )
            })}

        </div>
    );
}

export default AccountFlightCard;