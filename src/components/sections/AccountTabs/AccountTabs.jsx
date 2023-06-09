import './AccountTabs.scss';
import AccountTabsMain from './AccountTabsMain';
import AccountTabsBookings from './AccountTabsBookings';
import AccountTabsFavourites from './AccountTabsFavourites';
import AccountTabsPayments from './AccountTabsPayments';

const AccountTabs = () => {
    return (
        <section className="account-tabs" tabs="account">
            <div className="container">
                <div className="account-tabs__tabs-wrapper">
                    <ul className="tabs">
                        <button
                            className="tabs__item active"
                            type="button"
                            style={{ width: "calc(100% / 3)" }}
                            tab-group="account"
                            tab-button="account"
                        >
                            <div className="tabs__item-content">
                                <div className="tabs__item-title">Account</div>
                            </div>
                        </button>
                        <button
                            className="tabs__item"
                            type="button"
                            style={{ width: "calc(100% / 3)" }}
                            tab-group="account"
                            tab-button="bookings"
                        >
                            <div className="tabs__item-content">
                                <div className="tabs__item-title">Tickets &amp; Bookings</div>
                            </div>
                        </button>
                        <button
                            className="tabs__item"
                            type="button"
                            style={{ width: "calc(100% / 3)" }}
                            tab-group="account"
                            tab-button="favourites"
                        >
                            <div className="tabs__item-content">
                                <div className="tabs__item-title">Favourites</div>
                            </div>
                        </button>
                        <button
                            className="tabs__item"
                            type="button"
                            style={{ width: "calc(100% / 3)" }}
                            tab-group="account"
                            tab-button="payment"
                        >
                            <div className="tabs__item-content">
                                <div className="tabs__item-title">Payment methods</div>
                            </div>
                        </button>
                    </ul>
                </div>

                <AccountTabsMain/>
                <AccountTabsBookings/>
                <AccountTabsFavourites/>
                <AccountTabsPayments/>
            </div>
        </section>
    );
}

export default AccountTabs;