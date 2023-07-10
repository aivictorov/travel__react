import './Location.scss';
import { NavLink } from 'react-router-dom';
import { addClass } from '../../../utils/functions';

const Location = ({ text, style, link }) => {
    let add = addClass('location', style);

    return (
        <div className={'location' + add}>
            <div className="location__icon">
                <svg width={18} height={18}>
                    <use href="#location" />
                </svg>
            </div>
            <NavLink
                className="location__link"
                to={link}
                target="_blank"
            >
                {text}
            </NavLink>
        </div>
    );
}

export default Location;