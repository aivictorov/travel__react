import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import Button from '../../elements/Button/Button';

const FallIntoTravelCard = ({ title, text, price, img }) => {

    const { setSearchParams } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="fall-into-travel-card">
            <img src={img} alt="Melbourne" />
            <div className="fall-into-travel-card__content">
                <div className="fall-into-travel-card__header">
                    <div className="fall-into-travel-card__header-left">
                        <div className="fall-into-travel-card__title">
                            {title}
                        </div>
                        <div className="fall-into-travel-card__subtitle">
                            {text}
                        </div>
                    </div>
                    <div className="fall-into-travel-card__header-right">
                        <div className="fall-into-travel-card__price">{`$${price}`}</div>
                    </div>
                </div>
                <Button
                    text="Book flight"
                    action={() => {
                        setSearchParams({ from: 'All', to: title });
                        navigate("/flight-listing");
                    }}
                />
            </div>
        </div>
    );
}

export default FallIntoTravelCard;