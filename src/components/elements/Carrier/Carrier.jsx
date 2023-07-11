import './Carrier.scss';
import { addClass } from '../../../utils/functions';
import { NavLink } from 'react-router-dom';

const Carrier = ({ text, classes, link }) => {
    const add = addClass('carrier', classes)

    return (
        <div className={'carrier' + add}>
            <div className="carrier__icon">
                <svg width={18} height={18}>
                    <use href="#edit-icon" />
                </svg>
            </div>
            <NavLink
                className="carrier__link"
                to={link}
            >
                {text}
            </NavLink>
        </div>
    );
}

export default Carrier;