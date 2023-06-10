import './HeaderNav.scss';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import HeaderNavLogin from './HeaderNavLogin';


const HeaderNav = ({ style, btnStyle }) => {
    let mainColor, accentColor;

    if (style === 'inner-page') {
        mainColor = "#000";
        accentColor = "#8DD3BB";
    } else {
        mainColor = "#FFF";
        accentColor = "#8DD3BB";
    };

    return (
        <div className={`header-nav` + (style && ` header-nav--${style}`)}>
            <div className="header-nav__left">
                <NavLink className="header-nav__item" to="/flight-search">
                    <svg width={24} height={24}>
                        <use href="#flight-icon" />
                    </svg>
                    Find flight
                </NavLink>
                <NavLink className="header-nav__item" to="/hotel-search">
                    <svg width={24} height={24}>
                        <use href="#hotel-icon" />
                    </svg>
                    Find stays
                </NavLink>
            </div>

            <HeaderNavLogin btnStyle={btnStyle} />

            <div className="header-nav__logo">
                <Logo
                    mainColor={mainColor}
                    accentColor={accentColor}
                />
            </div>
        </div>
    );
}

export default HeaderNav;