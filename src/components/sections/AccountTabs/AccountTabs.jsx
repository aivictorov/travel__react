import './AccountTabs.scss';
import AccountTabsMain from './AccountTabsMain';
import AccountTabsBookings from './AccountTabsBookings';
import AccountTabsFav from './AccountTabsFav';
import AccountTabsPayments from './AccountTabsPayments';
import { useContext, useState } from 'react';
import { AppContext } from '../../../App';

const AccountTabs = () => {
    const { activeTabs, setActiveTabs } = useContext(AppContext);

    return (
        <section className="account-tabs" tabs="account">
            <div className="container">
                <div className="account-tabs__tabs-wrapper">
                    <ul className="tabs">
                        <button
                            className={`tabs__item ${activeTabs.accountTabs === 'main' ? 'active' : null}`}
                            type="button"
                            style={{ width: "calc(100% / 3)" }}
                            tab-group="account"
                            tab-button="main"
                            onClick={() => {
                                setActiveTabs({ ...activeTabs, accountTabs: 'main' })
                            }}
                        >
                            <div className="tabs__item-content">
                                <div className="tabs__item-title">Account</div>
                            </div>
                        </button>
                        <button
                            className={`tabs__item ${activeTabs.accountTabs === 'bookings' ? 'active' : null}`}
                            type="button"
                            style={{ width: "calc(100% / 3)" }}
                            tab-group="account"
                            tab-button="bookings"
                            onClick={() => {
                                setActiveTabs({ ...activeTabs, accountTabs: 'bookings' })
                            }}
                        >
                            <div className="tabs__item-content">
                                <div className="tabs__item-title">Tickets &amp; Bookings</div>
                            </div>
                        </button>
                        <button
                            className={`tabs__item ${activeTabs.accountTabs === 'favourites' ? 'active' : null}`}
                            type="button"
                            style={{ width: "calc(100% / 3)" }}
                            tab-group="account"
                            tab-button="favourites"
                            onClick={() => {
                                setActiveTabs({ ...activeTabs, accountTabs: 'favourites' })
                            }}
                        >
                            <div className="tabs__item-content">
                                <div className="tabs__item-title">Favourites</div>
                            </div>
                        </button>
                        <button
                            className={`tabs__item ${activeTabs.accountTabs === 'payment' ? 'active' : null}`}
                            type="button"
                            style={{ width: "calc(100% / 3)" }}
                            tab-group="account"
                            tab-button="payment"
                            onClick={() => {
                                setActiveTabs({ ...activeTabs, accountTabs: 'payment' })
                            }}
                        >
                            <div className="tabs__item-content">
                                <div className="tabs__item-title">Payment methods</div>
                            </div>
                        </button>
                    </ul>
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