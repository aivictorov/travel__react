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
import users from './../../../data/users';

const UserMenu = () => {
    const { setUserAuth, activeTabs, setActiveTabs, userID, accountTabsRef } = useContext(AppContext);

    const user = users.find((user) => {
        return user.id === userID;
    });

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
            }
        },
        {
            title: 'Bookings',
            icon: cardIcon,
            action: () => {
                setActiveTabs({ ...activeTabs, accountTabs: 'bookings', accountTabsBookings: 'flights' });
                navigateToAccountAndScroll();
            }
        },
        {
            title: 'Payments',
            icon: settingsIcon,
            action: () => {
                setActiveTabs({ ...activeTabs, accountTabs: 'payment' });
                navigateToAccountAndScroll();
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
            }
        },
        {
            title: 'Logout',
            icon: logoutIcon,
            action: () => {
                setUserAuth(false);
            }
        },
    ];




    return (
        <div className='user-menu'>
            <div className="user-menu__header">
                <div className="user-menu__avatar">
                    <img src={user.avatar} alt="user-avatar" />
                </div>
                <div className="user-menu__user">
                    <div className="user-menu__user-name">{user.name}</div>
                    <div className="user-menu__user-status">Online</div>
                </div>
            </div>
            <UserDroplistMenu data={data1} />
            <UserDroplistMenu data={data2} />
        </div>
    );
}

export default UserMenu;