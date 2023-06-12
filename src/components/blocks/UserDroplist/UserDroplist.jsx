import './UserDroplist.scss'
import { forwardRef, useContext } from "react";
import { AppContext } from "../../../App";
import userAvatar from './../../../img/users/avatars/01.jpg'
import UserDroplistMenu from './UserDroplistMenu';
import { useNavigate } from 'react-router-dom';

const UserDroplist = forwardRef(({ }, ref) => {
    const { setUserAuth, activeTabs, setActiveTabs } = useContext(AppContext);

    const navigate = useNavigate();

    const data1 = [
        {
            title: 'My account',
            icon: 'img/icons/user-dropdown/user.svg',
            action: () => {
                setActiveTabs({ ...activeTabs, accountTabs: 'main' });
                navigate('/account');
            }
        },

        {
            title: 'Bookings',
            icon: 'img/icons/user-dropdown/card.svg',
            action: () => { 
                setActiveTabs({ ...activeTabs, accountTabs: 'bookings', accountTabsBookings: 'flights' });
                navigate('/account');
        }
        },
        {
            title: 'Payments',
            icon: 'img/icons/user-dropdown/settings.svg',
            action: () => { 
                setActiveTabs({ ...activeTabs, accountTabs: 'payment' });
                navigate('/account');
        }
        },
    ]

    const data2 = [
        {
            title: 'Support',
            icon: 'img/icons/user-dropdown/support.svg',
            action: () => { 
                setActiveTabs({ ...activeTabs, accountTabs: 'main' });
                navigate('/account');
        }
        },
        {
            title: 'Logout',
            icon: 'img/icons/user-dropdown/logout.svg',
            action: () => { 
                setUserAuth(false) ;
            }
        },
    ]

    return (
        <div
            className="user-droplist"
            dropdown="user"
            ref={ref}
            onClick={(event) => {
                event.stopPropagation();
            }}
        >
            <div className="user-droplist__header">
                <div className="user-droplist__avatar">
                    <img src={userAvatar} alt="user-avatar" />
                </div>
                <div className="user-droplist__user">
                    <div className="user-droplist__user-name">John Doe</div>
                    <div className="user-droplist__user-status">Online</div>
                </div>
            </div>

            <UserDroplistMenu data={data1} />
            <UserDroplistMenu data={data2} />
        </div>
    );
})

export default UserDroplist;