import Button from '../../elements/Button/Button';
import './AccountFlightCard.scss';
import FavCheckboxButton from '../../elements/FavCheckboxButton/FavCheckboxButton';
import ButtonSquare from '../../elements/ButtonSquare/ButtonSquare';
import flights from './../../../data/flights';
import airlines from './../../../data/airlines';

const AccountFlightCard = ({ layout, ids }) => {

    const features = [
        { name: "Date", value: "A12" },
        { name: "Flight time", value: "Newark(EWR)" },
        { name: "Gate", value: "A12" },
        { name: "Seat no.", value: "128" },
    ];

    return (
        <div className="account-flight-card">

            {ids.map((id) => {
                const flight = flights.find((item) => item.id === id)
                const airlineLogo = airlines.find((item) => item.name === flight.airline).logo

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
                                        12:00 pm
                                    </div>
                                </div>
                                <div className="account-flight-card__time-spacer">—</div>
                                <div className="account-flight-card__time-column">
                                    <div className="account-booking-time-column-title">
                                        {flight.to}
                                    </div>
                                    <div className="account-booking-time-column-value">
                                        12:00 pm
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
                                                <img src="./img/icons/ticket/calendar.svg" alt="icon" />
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
                        {layout === "bookings" &&
                            <div className="account-flight-card__buttons">
                                <Button text="Download Ticket" />
                                <ButtonSquare
                                    style="border small"
                                    svgID="arrow-right"
                                />
                            </div>
                        }
                        {layout === "favourites" &&
                            <div className="account-flight-card__buttons">
                                <Button text="Flight Delails" />
                                <FavCheckboxButton id={id} />
                            </div>
                        }

                    </div>
                )
            })}

        </div>
    );
}

export default AccountFlightCard;