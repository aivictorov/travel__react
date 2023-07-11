import './HotelBookingCard.scss';
import { useContext } from 'react';
import { AppContext } from './../../../App';
import Price from '../../elements/Price/Price';
import { findHotel, findRoom } from '../../../utils/searchFunctions';
import { dateStringToObject, formatFullWeekDay } from '../../../utils/dateTimeFunctions';

const HotelBookingCard = () => {
    const { selectedHotel } = useContext(AppContext);
    const hotel = findHotel(selectedHotel.id);
    const room = findRoom(hotel, selectedHotel.room);
    
    return (
        <div className="hotel-reservation">
            <div className="hotel-reservation__top">
                <div className="hotel-reservation__title">
                    {room.name}
                </div>
                <Price value={room.price} period="night" classes="big" />
            </div>
            <div className="hotel-reservation__middle">
                <div className="hotel-reservation__image">
                    <img
                        src={hotel.logo}
                        alt="hotel-logo"
                    />
                </div>
                <div className="hotel-reservation__about">
                    <div className="hotel-reservation__about-title">
                        {hotel.name}
                    </div>
                    <div className="hotel-reservation__about-adress">
                        Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                    </div>
                </div>
            </div>
            <div className="hotel-reservation__bottom">
                <div className="hotel-reservation__begin">
                    <span>{formatFullWeekDay(dateStringToObject(selectedHotel.dates[0]))}</span>
                    <span>Check-In</span>
                </div>
                <div className="hotel-reservation__spacer">
                    <svg width={48} height={48}>
                        <use href="#hotel-icon" />
                    </svg>
                </div>
                <div className="hotel-reservation__end">
                    <span>{formatFullWeekDay(dateStringToObject(selectedHotel.dates[1]))}</span>
                    <span>Check-Out</span>
                </div>
            </div>
        </div>
    );
}

export default HotelBookingCard;