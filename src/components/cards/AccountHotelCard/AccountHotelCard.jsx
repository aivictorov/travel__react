import './AccountHotelCard.scss';
import { findHotel } from '../../../utils/searchFunctions';
import { dateStringToObject, formatWeekDay } from '../../../utils/dateTimeFunctions';
import Button from './../../elements/Button/Button';
import ButtonSquare from './../../elements/ButtonSquare/ButtonSquare';

const AccountHotelCard = ({ hotelBooking }) => {
    const hotel = findHotel(hotelBooking.id);

    return (
        <div className="account-hotel-card">
            <div className="account-hotel-card__title">
                {hotel.name}
            </div>
            <div className="account-hotel-card__subtitle">
                {hotel.rooms[0].name}
            </div>
            <div className="account-hotel-card__content">
                <div className="account-hotel-card__icon">
                    <img
                        src={hotel.logo}
                        alt="hotel-logo"
                    />
                </div>
                <div className="account-hotel-card__info">
                    <div className="account-hotel-card__time">
                        <div className="account-hotel-card__time-column">
                            <div className="account-booking-time-column-title">
                                Check-in
                            </div>
                            <div className="account-booking-time-column-value">
                                {formatWeekDay(dateStringToObject(hotelBooking.dates[0]))}
                            </div>
                        </div>
                        <div className="account-hotel-card__time-spacer">—</div>
                        <div className="account-hotel-card__time-column">
                            <div className="account-booking-time-column-title">
                                Check-out
                            </div>
                            <div className="account-booking-time-column-value">
                                {formatWeekDay(dateStringToObject(hotelBooking.dates[hotelBooking.dates.length - 1]))}

                            </div>
                        </div>
                    </div>
                    <ul className="account-hotel-card__features">
                        <li className="account-hotel-card__feature">
                            <div className="account-hotel-card__feature-icon">
                                <img src="./img/icons/ticket/time.svg" alt="icon" />
                            </div>
                            <div className="account-hotel-card__feature-content">
                                <div className="account-hotel-card__feature-title">
                                    Check-In
                                </div>
                                <div className="account-hotel-card__feature-value">
                                    12:00pm
                                </div>
                            </div>
                        </li>
                        <li className="account-hotel-card__feature">
                            <div className="account-hotel-card__feature-icon">
                                <img src="./img/icons/ticket/time.svg" alt="icon" />
                            </div>
                            <div className="account-hotel-card__feature-content">
                                <div className="account-hotel-card__feature-title">
                                    Check-Out
                                </div>
                                <div className="account-hotel-card__feature-value">
                                    11:30am
                                </div>
                            </div>
                        </li>
                        <li className="account-hotel-card__feature">
                            <div className="account-hotel-card__feature-icon">
                                <img src="./img/icons/ticket/seat.svg" alt="icon" />
                            </div>
                            <div className="account-hotel-card__feature-content">
                                <div className="account-hotel-card__feature-title">
                                    Room №
                                </div>
                                <div className="account-hotel-card__feature-value">
                                    On arrival
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="account-hotel-card__buttons">
                    <Button text="Download Booking" />
                    <ButtonSquare
                        style="border small"
                        svgID="arrow-right"
                    />
                </div>
            </div>
        </div>
    );
}

export default AccountHotelCard;