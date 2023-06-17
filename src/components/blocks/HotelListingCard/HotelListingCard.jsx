import './HotelListingCard.scss';
import Price from './../../elements/Price/Price';
import Location from '../../elements/Location/Location';
import Stars from '../../elements/Stars/Stars';
import Rating from '../../elements/Rating/Rating';
import FavCheckboxButton from './../../elements/FavCheckboxButton/FavCheckboxButton';
import Button from './../../elements/Button/Button';
import { useNavigate } from 'react-router-dom';

const HotelListingCard = ({ object }) => {
    const navigate = useNavigate();

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
                            action={() => { navigate(`/hotel-details/${object.id}`) }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}




export default HotelListingCard;