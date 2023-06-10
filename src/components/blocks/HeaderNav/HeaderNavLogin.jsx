import { useContext } from "react";
import { AppContext } from "../../../App";
import { NavLink } from "react-router-dom";
import UserDroplist from "../UserDroplist/UserDroplist";
import userAvatar from './../../../img/users/avatars/01.jpg'

const HeaderNavLogin = ({ btnStyle }) => {
    const { userAuth } = useContext(AppContext);

    if (userAuth) {
        return (
            <div className="header-nav__right">
                <div className="header-nav__item-wrapper">
                    <NavLink className="header-nav__item" to="/account">
                        <svg width={24} height={24}>
                            <use href="#heart-icon" />
                        </svg>
                        Favourites
                    </NavLink>
                    <span>|</span>
                </div>
                <div className="header-nav__item-wrapper">
                    <button className="header-nav__item" type="button" dropdown-button="user">
                        <div className="header-nav__avatar">
                            <div className="header-nav__avatar-image">
                                <img src={userAvatar} alt="user-avatar" />
                            </div>
                            <div className="header-nav__avatar-button">
                                <svg width={10} height={10}>
                                    <use href="#arrow-down" />
                                </svg>
                            </div>
                        </div>
                        John D.
                    </button>

                    <UserDroplist />

                </div>
            </div>
        );
    } else {
        return (
            <div className="header-nav__right">
                <NavLink className="header-nav__item" to="/login">
                    Login
                </NavLink>
                <NavLink
                    className={`button button--bold button--${btnStyle}`}
                    style={{ width: 104 }}
                    to="/sign-up"
                >
                    Sign Up
                </NavLink>
            </div>
        );
    };
};

export default HeaderNavLogin;