import Button from '../../elements/Button/Button';
import './AccountFlightCard.scss';
import FavCheckboxButton from '../../elements/FavCheckboxButton/FavCheckboxButton';
import ButtonSquare from '../../elements/ButtonSquare/ButtonSquare';

const AccountFlightCard = ({ layout }) => {

    // DEV ONLY
    const id = 1;

    // const features = [
    //     { name: "Check-In", value: "12:00pm" },
    //     { name: "Check-Out", value: "11:30am" },
    //     { name: "Room №", value: "On arrival" },
    // ];

    const features = [
        { name: "Date", value: "A12" },
        { name: "Flight time", value: "Newark(EWR)" },
        { name: "Gate", value: "A12" },
        { name: "Seat no.", value: "128" },
    ];

    return (
        <div className="account-booking-card">
            <div className="account-booking-card__icon">
                <img
                    src="./img/flights/airline-example-1/logo.png"
                    alt="airline-logo"
                />
            </div>
            <div className="account-booking-card__info">
                <div className="account-booking-card__time">
                    <div className="account-booking-card__time-column">
                        <div className="account-booking-time-column-title">
                            Newark(EWR)
                        </div>
                        <div className="account-booking-time-column-value">
                            12:00 pm
                        </div>
                    </div>
                    <div className="account-booking-card__time-spacer">—</div>
                    <div className="account-booking-card__time-column">
                        <div className="account-booking-time-column-title">
                            Newark(EWR)
                        </div>
                        <div className="account-booking-time-column-value">
                            12:00 pm
                        </div>
                    </div>
                </div>
                <ul className="account-booking-card__features">
                    {features.map((feature) => {
                        return (
                            <li
                                className="account-booking-card__feature"
                                key={feature.name}
                            >
                                <div className="account-booking-card__feature-icon">
                                    <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                                </div>
                                <div className="account-booking-card__feature-content">
                                    <div className="account-booking-card__feature-title">
                                        {feature.name}
                                    </div>
                                    <div className="account-booking-card__feature-value">
                                        {feature.value}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {layout === "bookings" &&
                <div className="account-booking-card__buttons">
                    <Button text="Download Ticket" />
                    <ButtonSquare
                        style="border small"
                        svgID="arrow-right"
                    />
                </div>
            }
            {layout === "favourites" &&
                <div className="account-booking-card__buttons">
                    <Button text="Flight Delails" />
                    <FavCheckboxButton id={id} />
                </div>
            }
        </div>
    );
}

export default AccountFlightCard;