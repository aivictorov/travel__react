import './UserMenu.scss'
import { useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../../App";
import UserDroplistMenu from './UserMenuList';
import userIcon from './../../../img/icons/user-dropdown/user.svg';
import cardIcon from './../../../img/icons/user-dropdown/card.svg';
import settingsIcon from './../../../img/icons/user-dropdown/settings.svg';
import supportIcon from './../../../img/icons/user-dropdown/support.svg';
import logoutIcon from './../../../img/icons/user-dropdown/logout.svg';

const UserMenu = () => {
    const { setUserAuth, activeTabs, setActiveTabs, user, accountTabsRef, openMobileNav, setOpenMobileNav } = useContext(AppContext);

    const navigate = useNavigate();

    function scrollToRef(ref) {
        ref.current.scrollIntoView({ block: 'start' });
    };

    function navigateToAccountAndScroll() {
        navigate('/account');
        setTimeout(() => { scrollToRef(accountTabsRef) }, 250);
    };

    const data1 = [
        {
            title: 'My account',
            icon: userIcon,
            action: () => {
                setActiveTabs({ ...activeTabs, accountTabs: 'main' });
                navigateToAccountAndScroll();
                if (openMobileNav) setOpenMobileNav(!openMobileNav);
            }
        },
        {
            title: 'Bookings',
            icon: cardIcon,
            action: () => {
                setActiveTabs({ ...activeTabs, accountTabs: 'bookings', accountTabsBookings: 'flights' });
                navigateToAccountAndScroll();
                if (openMobileNav) setOpenMobileNav(!openMobileNav);
            }
        },
        {
            title: 'Payments',
            icon: settingsIcon,
            action: () => {
                setActiveTabs({ ...activeTabs, accountTabs: 'payment' });
                navigateToAccountAndScroll();
                if (openMobileNav) setOpenMobileNav(!openMobileNav);
            }
        },
    ];

    const data2 = [
        {
            title: 'Support',
            icon: supportIcon,
            action: () => {
                setActiveTabs({ ...activeTabs, accountTabs: 'main' });
                navigateToAccountAndScroll();
                if (openMobileNav) setOpenMobileNav(!openMobileNav);
            }
        },
        {
            title: 'Logout',
            icon: logoutIcon,
            action: () => {
                setUserAuth(false);
                if (openMobileNav) setOpenMobileNav(!openMobileNav);
            }
        },
    ];

    return (
        <div className='user-menu'>
            <div className="user-menu__header">
                <div className="user-menu__avatar">
                    <img src={user.account.avatar} alt="user-avatar" />
                </div>
                <div className="user-menu__user">
                    <div className="user-menu__user-name">{user.account.name}</div>
                    <div className="user-menu__user-status">Online</div>
                </div>
            </div>
            <UserDroplistMenu data={data1} />
            <UserDroplistMenu data={data2} />
        </div>
    );
}

export default UserMenu;