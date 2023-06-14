import './AccountTabs.scss';
import AccountTabsMain from './AccountTabsMain';
import AccountTabsBookings from './AccountTabsBookings';
import AccountTabsFav from './AccountTabsFav';
import AccountTabsPayments from './AccountTabsPayments';
import { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import Tabs from './../../elements/Tabs/Tabs';

const AccountTabs = () => {
    const { activeTabs, setActiveTabs } = useContext(AppContext);

    const tabs = [
        {
            name: 'main',
            title: 'Account',
            svgID: '',
            active: activeTabs.accountTabs === 'main',
            action: () => { setActiveTabs({ ...activeTabs, accountTabs: 'main' }) },
        },
        {
            name: 'bookings',
            title: 'Tickets & Bookings',
            svgID: '',
            active: activeTabs.accountTabs === 'bookings',
            action: () => { setActiveTabs({ ...activeTabs, accountTabs: 'bookings' }) },
        },
        {
            name: 'favourites',
            title: 'Favourites',
            svgID: '',
            active: activeTabs.accountTabs === 'favourites',
            action: () => { setActiveTabs({ ...activeTabs, accountTabs: 'favourites' }) },
        },
        {
            name: 'payment',
            title: 'Payment methods',
            svgID: '',
            active: activeTabs.accountTabs === 'payment',
            action: () => { setActiveTabs({ ...activeTabs, accountTabs: 'payment' }) },
        },
    ]

    return (
        <section className="account-tabs" tabs="account">
            <div className="container">
                <div className="account-tabs__tabs-wrapper">
                    <Tabs tabs={tabs} />
                </div>
                {activeTabs.accountTabs === 'main' && <AccountTabsMain />}
                {activeTabs.accountTabs === 'bookings' && <AccountTabsBookings />}
                {activeTabs.accountTabs === 'favourites' && <AccountTabsFav />}
                {activeTabs.accountTabs === 'payment' && <AccountTabsPayments />}
            </div>
        </section>
    );
}

export default AccountTabs;