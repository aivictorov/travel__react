import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import UserDroplist from "../UserDroplist/UserDroplist";
import userAvatar from './../../../img/users/avatars/01.jpg'

const HeaderNavUser = () => {
    const userDroplistRef = useRef(null);

    const toggleDropdown = () => {
        userDroplistRef.current.classList.toggle('active');
    }

    useEffect(() => {
        const closeDropdown = () => userDroplistRef.current.classList.remove('active');

        const closeDropdownByKey = (event) => {
            if (event.key === 'Escape') closeDropdown();
        };

        document.addEventListener('click', closeDropdown);
        document.addEventListener('keydown', closeDropdownByKey);

        return () => {
            document.removeEventListener('click', closeDropdown);
            document.removeEventListener('keydown', closeDropdownByKey);
        };
    }, []);

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
                <button
                    className="header-nav__item"
                    type="button"
                    dropdown-button="user"
                    onClick={(event) => {
                        event.stopPropagation();
                        toggleDropdown();
                    }}
                >
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
                <UserDroplist ref={userDroplistRef} />
            </div>
        </div>
    );
};

export default HeaderNavUser;