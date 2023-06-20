import './Location.scss';
import { NavLink } from 'react-router-dom';

const Location = ({ text, style, link }) => {
    let addClass = '';
    if (style === 'small') addClass = ' location--small'

    return (
        <div className={`location${addClass}`}>
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