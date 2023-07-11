import './BookingSummary.scss'
import { useContext } from 'react';
import { AppContext } from './../../../App';
import Rating from '../../elements/Rating/Rating';
import { findAirline, findFlight, findHotel, findRoom } from '../../../utils/searchFunctions';

const BookingSummary = ({ layout }) => {
    const { selectedHotel, selectedFlight } = useContext(AppContext);

    let flight, hotel, room, title, logo, price, rating;

    if (layout === 'flight') {
        flight = findFlight(selectedFlight.direct);
        title = flight.airline;
        logo = findAirline(flight.airline).logo;
        price = selectedFlight.price;
        rating = flight.rating;
    }

    if (layout === 'hotel') {
        hotel = findHotel(selectedHotel.id);
        room = findRoom(hotel, selectedHotel.room);
        title = hotel.name;
        logo = hotel.coverSmall;
        price = room.price;
        rating = hotel.rating;
    }

    const discount = Math.round(0.1 * price);
    const taxes = Math.round(0.18 * price);
    const serviceFee = Math.round(0.01 * price);
    const total = price - discount + taxes + serviceFee;

    return (
        <div className="booking-summary">
            <div className="booking-summary__object">
                <div className="booking-summary__object-image">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="booking-summary__object-info">
                    <div className="booking-summary__object-header">
                        <div className="booking-summary__object-title">
                            Economy
                        </div>
                        <div className="booking-summary__object-subtitle">
                            {title}
                        </div>
                    </div>
                    <Rating
                        value={rating}
                    />
                </div>
            </div>
            <div className="booking-summary__protected">
                Your booking is protected by <strong>golobe</strong>
            </div>
            <div className="booking-summary__details">
                <div className="booking-summary__title">Price Details</div>
                <div className="booking-summary__item">
                    <span>Base Fare</span>
                    <span>{`$${price}`}</span>
                </div>
                <div className="booking-summary__item">
                    <span>Discount</span>
                    <span>{`-$${discount}`}</span>
                </div>
                <div className="booking-summary__item">
                    <span>Taxes</span>
                    <span>{`$${taxes}`}</span>
                </div>
                <div className="booking-summary__item">
                    <span>Service Fee</span>
                    <span>{`$${serviceFee}`}</span>
                </div>
            </div>
            <div className="booking-summary__total">
                <span>Total </span>
                <span>{`$${total}`}</span>
            </div>
        </div>
    );
}

export default BookingSummary;