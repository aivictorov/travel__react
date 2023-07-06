import './HotelBookingCard.scss';
import Price from '../../elements/Price/Price';

const HotelBookingCard = ({ hotel, room, price }) => {
    return (
        <div className="hotel-reservation">
            <div className="hotel-reservation__top">
                <div className="hotel-reservation__title">
                    {room}
                </div>
                <Price value={price} period="night" style="big" />
            </div>
            <div className="hotel-reservation__middle">
                <div className="hotel-reservation__image">
                    <img
                        src="./img/hotels/hotel-example-1/logo.jpg"
                        alt="hotel-logo"
                    />
                </div>
                <div className="hotel-reservation__about">
                    <div className="hotel-reservation__about-title">
                        {hotel}
                    </div>
                    <div className="hotel-reservation__about-adress">
                        Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                    </div>
                </div>
            </div>
            <div className="hotel-reservation__bottom">
                <div className="hotel-reservation__begin">
                    <span>Thursday, Dec 8</span>
                    <span>Check-In</span>
                </div>
                <div className="hotel-reservation__spacer">
                    <svg width={48} height={48}>
                        <use href="#hotel-icon" />
                    </svg>
                </div>
                <div className="hotel-reservation__end">
                    <span>Friday, Dec 9</span>
                    <span>Check-Out</span>
                </div>
            </div>
        </div>
    );
}

export default HotelBookingCard;