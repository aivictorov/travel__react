import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from './../../../App';
import Drop from './../../drops/Drop/Drop';
import UserMenu from './../../drops/UserMenu/UserMenu';

const HeaderNavUser = () => {
    const navigate = useNavigate();
    const { activeTabs, setActiveTabs, user, accountTabsRef } = useContext(AppContext);

    const [openDropMenu, setOpenDropMenu] = useState(false);

    let userName = user.account.name.split(' ');
    userName[1] = userName[1].slice(0, 1) + '.'
    userName = userName.join(' ');

    function scrollToRef(ref) {
        ref.current.scrollIntoView({ block: 'start' });
    };

    function navigateToAccountAndScroll() {
        navigate('/account');
        setTimeout(() => { scrollToRef(accountTabsRef) }, 250);
    };

    return (
        <div className="header-nav__right">
            <div className="header-nav__item-wrapper">
                <button
                    className="header-nav__item"
                    onClick={() => {
                        setActiveTabs({ ...activeTabs, accountTabs: 'favourites', accountTabsFav: 'flights' });
                        navigateToAccountAndScroll();
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
                    onMouseDown={(event) => {
                        event.stopPropagation();
                        setOpenDropMenu(!openDropMenu);
                    }}
                >
                    <div className="header-nav__avatar">
                        <div className="header-nav__avatar-image">
                            <img src={user.account.avatar} alt="user-avatar" />
                        </div>
                        <div className="header-nav__avatar-button">
                            <svg width={10} height={10}>
                                <use href="#arrow-down" />
                            </svg>
                        </div>
                    </div>
                    {userName}
                </button>

                <Drop
                    name="menu"
                    classes="menu"
                    isOpen={openDropMenu}
                    onClose={() => setOpenDropMenu(false)}
                    content={<UserMenu />}
                />
            </div>
        </div>
    );
};

export default HeaderNavUser;