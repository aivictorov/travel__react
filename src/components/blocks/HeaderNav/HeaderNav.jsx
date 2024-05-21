import './HeaderNav.scss';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../App';
import Logo from '../Logo/Logo';
import HeaderNavLogin from './HeaderNavLogin';
import HeaderNavUser from './HeaderNavUser';
import MobileNavIcon from './../../elements/MobileNav/MobileNavIcon';

const HeaderNav = ({ classes }) => {
    const { userAuth } = useContext(AppContext)

    const btnStyle = classes === "inner-page" ? 'dark' : 'light'

    let mainColor, accentColor;

    if (classes === 'inner-page') {
        mainColor = "#000";
        accentColor = "#8DD3BB";
    } else {
        mainColor = "#FFF";
        accentColor = "#8DD3BB";
    };

    return (
        <div className={`header-nav` + (classes && ` header-nav--${classes}`)}>
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
                <MobileNavIcon classes={classes} />
            </div>

            <div className="header-nav__logo">
                <Logo
                    mainColor={mainColor}
                    accentColor={accentColor}
                />
            </div>

            {!userAuth && <HeaderNavLogin btnStyle={btnStyle} />}
            {userAuth && <HeaderNavUser btnStyle={btnStyle} />}
        </div>
    );
}

export default HeaderNav;