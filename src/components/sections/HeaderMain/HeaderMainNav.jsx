import './HeaderMainNav.scss';
import Logo from './../../blocks/Logo/Logo';

const HeaderMainNav = () => {
    return (
        <div className="header-nav">
            <div className="header-nav__left">
                <a className="header-nav__item" href="#!">
                    <svg width={24} height={24}>
                        <use href="#flight-icon" />
                    </svg>
                    Find flight
                </a>
                <a className="header-nav__item" href="#!">
                    <svg width={24} height={24}>
                        <use href="#hotel-icon" />
                    </svg>
                    Find stays
                </a>
            </div>
            <div className="header-nav__right">
                <a className="header-nav__item" href="#!">
                    Login
                </a>
                <button
                    className="button button--light button--bold"
                    type="button"
                    style={{ width: 104 }}
                >
                    Sign Up
                </button>
            </div>
            <div className="header-nav__logo">
                <Logo />
            </div>
        </div>
    );
}

export default HeaderMainNav;