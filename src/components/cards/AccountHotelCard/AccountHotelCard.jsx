import './AccountHotelCard.scss';
import Button from './../../elements/Button/Button';
import ButtonSquare from './../../elements/ButtonSquare/ButtonSquare';
import { dateStringToObject, formatWeekDay } from '../../../utils/dateTimeFunctions';
import { findHotel } from '../../../utils/searchFunctions';
import timeIcon from './../../../img/icons/ticket/time.svg'

const AccountHotelCard = ({ hotelBooking }) => {
    const hotel = findHotel(hotelBooking.id);
    const room = hotel.rooms.find((room) => room.id === hotelBooking.room);

    const features = [
        {
            title: 'Check-In',
            value: '12:00pm',
            icon: timeIcon,
        },
        {
            title: 'Check-Out',
            value: '11:30am',
            icon: timeIcon,
        },
        {
            title: 'Room №',
            value: 'On arrival',
            icon: timeIcon,
        },
    ]

    return (
        <div className="account-hotel-card">
            <div className="account-hotel-card__header">
                <div className="account-hotel-card__title">
                    {hotel.name}
                </div>
                <div className="account-hotel-card__subtitle">
                    {room.name}
                </div>
            </div>
            <div className="account-hotel-card__body">
                <div className="account-hotel-card__content">
                    <div className="account-hotel-card__main">
                        <div className="account-hotel-card__icon">
                            <img
                                src={hotel.logo}
                                alt="hotel-logo"
                            />
                        </div>
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
                    </div>
                    <ul className="account-hotel-card__features">
                        {features.map((feature, index) => {
                            return (
                                <li className="account-hotel-card__feature" key={index}>
                                    <div className="account-hotel-card__feature-icon">
                                        <img src={feature.icon} alt="icon" />
                                    </div>
                                    <div className="account-hotel-card__feature-content">
                                        <div className="account-hotel-card__feature-title">
                                            {feature.title}
                                        </div>
                                        <div className="account-hotel-card__feature-value">
                                            {feature.value}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="account-hotel-card__buttons">
                    <Button text="Download Booking" />
                    <ButtonSquare
                        classes="border small"
                        svgID="arrow-right"
                    />
                </div>
            </div>


        </div>
    );
}

export default AccountHotelCard;