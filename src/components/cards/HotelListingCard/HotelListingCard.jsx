import './HotelListingCard.scss';
import Price from './../../elements/Price/Price';
import Location from '../../elements/Location/Location';
import Stars from '../../elements/Stars/Stars';
import Rating from '../../elements/Rating/Rating';
import FavCheckboxButton from './../../elements/FavCheckboxButton/FavCheckboxButton';
import Button from './../../elements/Button/Button';
import { useNavigate } from 'react-router-dom';
import { findHotel } from '../../../utils/searchFunctions';
import { useContext } from 'react';
import { AppContext } from './../../../App';

const HotelListingCard = ({ hotel, dates }) => {
    const navigate = useNavigate();
    const { setSelectedHotel } = useContext(AppContext);

    console.log(dates);

    const object = findHotel(hotel);

    const minPrice = object.rooms.reduce((prev, curr) => curr.price < prev ? curr.price : prev, object.rooms[0].price);

    return (
        <div className="hotel-card">
            <div className="hotel-card__image">
                <img src={object.cover} alt="hotel" />
            </div>
            <div className="hotel-card__content">
                <div className="hotel-card__info">
                    <div className="hotel-card__info-left">
                        <div className="hotel-card__title">
                            {object.name}
                        </div>
                        <div className="hotel-card__details">
                            <Location
                                text={object.address}
                                style="small"
                            />
                            <Stars number={object.stars} />
                            <Rating value={object.rating} />
                        </div>
                    </div>
                    <div className="hotel-card__info-right">
                        <div className="hotel-card__info-right">
                            <Price
                                value={minPrice}
                                period="night"
                                before="starting from"
                                after="excl. tax"
                            />
                        </div>
                    </div>
                </div>
                <div className="hotel-card__buttons">
                    <FavCheckboxButton
                        hotelBooking={object.id}
                    />
                    <div className="hotel-card__button-wrapper">
                        <Button
                            text="View Place"
                            style="bold w100"
                            action={() => { 
                                setSelectedHotel({id: object.id, room: null, dates: dates});
                                navigate('/hotel-details');
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}




export default HotelListingCard;