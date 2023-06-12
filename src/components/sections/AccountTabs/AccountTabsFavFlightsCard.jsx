import { useContext } from "react";
import { AppContext } from "../../../App";
import FavCheckboxButton from "../../elements/FavCheckboxButton/FavCheckboxButton";

const AccountTabsFavFlightsCard = ({ id }) => {
    const { flights } = useContext(AppContext);

    const flight = flights.find((flight) => {
        return flight.id === id;
    });

    return (
        <div className="account-booking-card">
            <div className="account-booking-card__icon">
                <img
                    src={flight.logo}
                    alt={flight.airline}
                />
            </div>
            <div className="account-booking-card__info">
                <div className="account-booking-card__time">
                    <div className="account-booking-card__time-column">
                        <div className="account-booking-time-column-title">
                            {`${flight.from} (EWR)`}
                        </div>
                        <div className="account-booking-time-column-value">
                            {flight.start}
                        </div>
                    </div>
                    <div className="account-booking-card__time-spacer">—</div>
                    <div className="account-booking-card__time-column">
                        <div className="account-booking-time-column-title">
                            {`${flight.to} (EWR)`}
                        </div>
                        <div className="account-booking-time-column-value">
                            {flight.end}
                        </div>
                    </div>
                </div>
                <ul className="account-booking-card__features">
                    <li className="account-booking-card__feature">
                        <div className="account-booking-card__feature-icon">
                            <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                        </div>
                        <div className="account-booking-card__feature-content">
                            <div className="account-booking-card__feature-title">
                                Date
                            </div>
                            <div className="account-booking-card__feature-value">
                                A12
                            </div>
                        </div>
                    </li>
                    <li className="account-booking-card__feature">
                        <div className="account-booking-card__feature-icon">
                            <img src="./img/icons/ticket/time.svg" alt="icon" />
                        </div>
                        <div className="account-booking-card__feature-content">
                            <div className="account-booking-card__feature-title">
                                Flight time
                            </div>
                            <div className="account-booking-card__feature-value">
                                Newark(EWR)
                            </div>
                        </div>
                    </li>
                    <li className="account-booking-card__feature">
                        <div className="account-booking-card__feature-icon">
                            <img src="./img/icons/ticket/gate.svg" alt="icon" />
                        </div>
                        <div className="account-booking-card__feature-content">
                            <div className="account-booking-card__feature-title">
                                Gate
                            </div>
                            <div className="account-booking-card__feature-value">
                                A12
                            </div>
                        </div>
                    </li>
                    <li className="account-booking-card__feature">
                        <div className="account-booking-card__feature-icon">
                            <img src="./img/icons/ticket/seat.svg" alt="icon" />
                        </div>
                        <div className="account-booking-card__feature-content">
                            <div className="account-booking-card__feature-title">
                                Seat no.
                            </div>
                            <div className="account-booking-card__feature-value">
                                128
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="account-booking-card__buttons">
                <button className="button" type="button">
                    Flight Delails
                </button>
                <FavCheckboxButton id={id} />
            </div>
        </div>

    );
}

export default AccountTabsFavFlightsCard;