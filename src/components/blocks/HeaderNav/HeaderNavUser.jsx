import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import userAvatar from './../../../img/users/avatars/01.jpg'
import UserDroplist from './../../drops/UserDroplist/UserDroplist';

const HeaderNavUser = () => {
    const navigate = useNavigate(AppContext);
    const { activeTabs, setActiveTabs } = useContext(AppContext);

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
                <button
                    className="header-nav__item"
                    onClick={() => {
                        setActiveTabs({ ...activeTabs, accountTabs: 'favourites', accountTabsFav: 'flights' });
                        navigate('/account');
                    }}
                >
                    <svg width={24} height={24}>
                        <use href="#heart-icon" />
                    </svg>
                    Favourites
                </button>
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