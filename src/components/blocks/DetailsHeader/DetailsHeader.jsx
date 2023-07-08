import './DetailsHeader.scss';
import { useNavigate } from 'react-router-dom';
import Location from './../../elements/Location/Location';
import Rating from './../../elements/Rating/Rating';
import FavCheckboxButton from '../../elements/FavCheckboxButton/FavCheckboxButton';
import ButtonSquare from './../../elements/ButtonSquare/ButtonSquare';
import Button from '../../elements/Button/Button';
import Stars from './../../elements/Stars/Stars';
import Price from './../../elements/Price/Price';

const DetailsHeader = ({ title = 'Emirates A380 Airbus', cover, action, favButton }) => {
    const navigate = useNavigate();

    return (
        <div className="details-header">
            <div className="details-header__content">
                <div className="details-header__left">
                    <div className="details-header__main">
                        <div className="details-header__main-title">
                            {title}
                        </div>
                        <Stars number={5} />
                    </div>
                    <div className="details-header__details">
                        <Location text="Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437" />
                        <Rating value={3.2} />
                    </div>
                </div>
                <div className="details-header__right">
                    <Price value={240} period="night" style="big" />
                    <div className="details-header__buttons">
                        {favButton}
                        <ButtonSquare
                            style="border small"
                            svgID="share"
                        />
                        <div className="details-header__button-wrapper">
                            <Button
                                text="Book now"
                                style="bold w100"
                                action={action}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsHeader;