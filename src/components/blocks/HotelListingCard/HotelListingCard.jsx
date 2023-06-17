import './HotelListingCard.scss';
import Price from './../../elements/Price/Price';
import Location from '../../elements/Location/Location';
import Stars from '../../elements/Stars/Stars';
import Rating from '../../elements/Rating/Rating';
import FavCheckboxButton from './../../elements/FavCheckboxButton/FavCheckboxButton';
import Button from './../../elements/Button/Button';
import { useNavigate } from 'react-router-dom';

const HotelListingCard = () => {
    const navigate = useNavigate();

    return (
        <div className="hotel-card">
            <div className="hotel-card__image">
                <img src="./img/hotels/hotel-example-1/cover.jpg" alt="hotel" />
            </div>
            <div className="hotel-card__content">
                <div className="hotel-card__info">
                    <div className="hotel-card__info-left">
                        <div className="hotel-card__title">
                            CVK Park Bosphorus Hotel Istanbul
                        </div>
                        <div className="hotel-card__details">
                            <Location
                                text="Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437"
                                style="small"
                            />
                            <Stars number={5} />
                            <Rating value={4.5} />
                        </div>
                    </div>
                    <div className="hotel-card__info-right">
                        <div className="hotel-card__info-right">
                            <Price
                                value="240"
                                period="night"
                                before="starting from"
                                after="excl. tax"
                            />
                        </div>
                    </div>
                </div>
                <div className="hotel-card__buttons">
                    <FavCheckboxButton />
                    <div className="hotel-card__button-wrapper">
                        <Button
                            text="View Place"
                            style="bold w100"
                            action={() => { navigate('/hotel-details') }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelListingCard;