import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import coverImg from "./../img/users/cover.jpg";
import avatarImg from "./../img/users/avatars/01.jpg";
import AccountTabsPayment from "../components/blocks/AccountTabsPayment/AccountTabsPayment";

const Account = () => {
    return (
        <>
            <HeaderInner />
            <main className="account">
                <section className="account-cover">
                    <div className="container">
                        <div className="account-cover__background">
                            <img src={coverImg} alt="account-cover" />
                            <div className="account-cover__upload-button">
                                <button className="button" type="button">
                                    <div className="button__icon">
                                        <svg width={16} height={16}>
                                            <use href="#upload-icon" />
                                        </svg>
                                    </div>
                                    Upload new cover
                                </button>
                            </div>
                        </div>
                        <div className="account-cover__user">
                            <div className="account-cover__user-avatar">
                                <div className="account-cover__user-avatar-image">
                                    <img src={avatarImg} alt="user-avatar" />
                                </div>
                                <button
                                    className="account-cover__user-avatar-edit-button"
                                    type="button"
                                >
                                    <svg width={24} height={24}>
                                        <use href="#pen-icon" />
                                    </svg>
                                </button>
                            </div>
                            <div className="account-cover__user-name">John Doe</div>
                            <div className="account-cover__user-email">john.doe@gmail.com</div>
                        </div>
                    </div>
                </section>
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
                                    tab-button="payment"
                                >
                                    <div className="tabs__item-content">
                                        <div className="tabs__item-title">Payment methods</div>
                                    </div>
                                </button>
                            </ul>
                        </div>
                        <div
                            className="account-tabs__content"
                            tab-content="account"
                            tab-group="account"
                        >
                            <h2 className="account-tabs__content-title">Account</h2>
                            <ul className="account-info">
                                <li className="account-info__item">
                                    <div className="account-info__item-left">
                                        <div className="account-info__item-name">Name</div>
                                        <div className="account-info__item-value">John Doe</div>
                                    </div>
                                    <div className="account-info__item-right">
                                        <button
                                            className="button button--border"
                                            type="button"
                                            style={{ width: 140 }}
                                        >
                                            <div className="button__icon">
                                                <svg width={16} height={16}>
                                                    <use href="#edit-icon" />
                                                </svg>
                                            </div>
                                            Change
                                        </button>
                                    </div>
                                </li>
                                <li className="account-info__item">
                                    <div className="account-info__item-left">
                                        <div className="account-info__item-name">Email</div>
                                        <div className="account-info__item-value">
                                            John.doe@gmail.com
                                        </div>
                                    </div>
                                    <div className="account-info__item-right">
                                        <button className="button button--border" type="button">
                                            <div className="button__icon">
                                                <svg width={16} height={16}>
                                                    <use href="#add-circle-icon" />
                                                </svg>
                                            </div>
                                            Add another email
                                        </button>
                                        <button
                                            className="button button--border"
                                            type="button"
                                            style={{ width: 140 }}
                                        >
                                            <div className="button__icon">
                                                <svg width={16} height={16}>
                                                    <use href="#edit-icon" />
                                                </svg>
                                            </div>
                                            Change
                                        </button>
                                    </div>
                                </li>
                                <li className="account-info__item">
                                    <div className="account-info__item-left">
                                        <div className="account-info__item-name">Password</div>
                                        <div className="account-info__item-value">************</div>
                                    </div>
                                    <div className="account-info__item-right">
                                        <button
                                            className="button button--border"
                                            type="button"
                                            style={{ width: 140 }}
                                        >
                                            <div className="button__icon">
                                                <svg width={16} height={16}>
                                                    <use href="#edit-icon" />
                                                </svg>
                                            </div>
                                            Change
                                        </button>
                                    </div>
                                </li>
                                <li className="account-info__item">
                                    <div className="account-info__item-left">
                                        <div className="account-info__item-name">Phone number</div>
                                        <div className="account-info__item-value">+1 000-000-0000</div>
                                    </div>
                                    <div className="account-info__item-right">
                                        <button
                                            className="button button--border"
                                            type="button"
                                            style={{ width: 140 }}
                                        >
                                            <div className="button__icon">
                                                <svg width={16} height={16}>
                                                    <use href="#edit-icon" />
                                                </svg>
                                            </div>
                                            Change
                                        </button>
                                    </div>
                                </li>
                                <li className="account-info__item">
                                    <div className="account-info__item-left">
                                        <div className="account-info__item-name">Address</div>
                                        <div className="account-info__item-value">
                                            St 32 main downtown, Los Angeles, California, USA
                                        </div>
                                    </div>
                                    <div className="account-info__item-right">
                                        <button
                                            className="button button--border"
                                            type="button"
                                            style={{ width: 140 }}
                                        >
                                            <div className="button__icon">
                                                <svg width={16} height={16}>
                                                    <use href="#edit-icon" />
                                                </svg>
                                            </div>
                                            Change
                                        </button>
                                    </div>
                                </li>
                                <li className="account-info__item">
                                    <div className="account-info__item-left">
                                        <div className="account-info__item-name">Date of birth</div>
                                        <div className="account-info__item-value">01-01-1992</div>
                                    </div>
                                    <div className="account-info__item-right">
                                        <button
                                            className="button button--border"
                                            type="button"
                                            style={{ width: 140 }}
                                        >
                                            <div className="button__icon">
                                                <svg width={16} height={16}>
                                                    <use href="#edit-icon" />
                                                </svg>
                                            </div>
                                            Change
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="account-tabs__content none"
                            tab-content="bookings"
                            tab-group="account"
                            tabs="bookings"
                        >
                            <h2 className="account-tabs__content-title">Tickets/Bookings</h2>
                            <div className="account-bookings">
                                <ul className="tabs">
                                    <button
                                        className="tabs__item active"
                                        type="button"
                                        style={{ width: "calc(100% / 2)" }}
                                        tab-group="bookings"
                                        tab-button="flights"
                                    >
                                        <div className="tabs__item-icon">
                                            <svg width={24} height={24}>
                                                <use href="#flight-icon" />
                                            </svg>
                                        </div>
                                        <div className="tabs__item-content">
                                            <div className="tabs__item-title">Flights</div>
                                        </div>
                                    </button>
                                    <button
                                        className="tabs__item"
                                        type="button"
                                        style={{ width: "calc(100% / 2)" }}
                                        tab-group="bookings"
                                        tab-button="hotels"
                                    >
                                        <div className="tabs__item-icon">
                                            <svg width={24} height={24}>
                                                <use href="#hotel-icon" />
                                            </svg>
                                        </div>
                                        <div className="tabs__item-content">
                                            <div className="tabs__item-title">Stays</div>
                                        </div>
                                    </button>
                                </ul>
                                <div
                                    className="account-bookings__content"
                                    tab-content="flights"
                                    tab-group="bookings"
                                >
                                    <div className="account-booking-card">
                                        <div className="account-booking-card__icon">
                                            <img
                                                src="./img/flights/airline-example-1/logo.png"
                                                alt="airline-logo"
                                            />
                                        </div>
                                        <div className="account-booking-card__info">
                                            <div className="account-booking-card__time">
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Newark(EWR)
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        12:00 pm
                                                    </div>
                                                </div>
                                                <div className="account-booking-card__time-spacer">—</div>
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Newark(EWR)
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        12:00 pm
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="account-booking-card__features">
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Date
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            A12
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Flight time
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            Newark(EWR)
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/gate.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Gate
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            A12
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Seat no.
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            128
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="account-booking-card__buttons">
                                            <button className="button" type="button">
                                                Download Ticket
                                            </button>
                                            <button
                                                className="square-button square-button--border"
                                                type="button"
                                                style={{ width: 48, height: 48 }}
                                            >
                                                <svg width={16} height={16}>
                                                    <use href="#arrow-right" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="account-booking-card">
                                        <div className="account-booking-card__icon">
                                            <img
                                                src="./img/flights/airline-example-1/logo.png"
                                                alt="airline-logo"
                                            />
                                        </div>
                                        <div className="account-booking-card__info">
                                            <div className="account-booking-card__time">
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Newark(EWR)
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        12:00 pm
                                                    </div>
                                                </div>
                                                <div className="account-booking-card__time-spacer">—</div>
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Newark(EWR)
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        12:00 pm
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="account-booking-card__features">
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Date
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            A12
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Flight time
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            Newark(EWR)
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/gate.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Gate
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            A12
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Seat no.
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            128
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="account-booking-card__buttons">
                                            <button className="button" type="button">
                                                Download Ticket
                                            </button>
                                            <button
                                                className="square-button square-button--border"
                                                type="button"
                                                style={{ width: 48, height: 48 }}
                                            >
                                                <svg width={16} height={16}>
                                                    <use href="#arrow-right" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="account-booking-card">
                                        <div className="account-booking-card__icon">
                                            <img
                                                src="./img/flights/airline-example-1/logo.png"
                                                alt="airline-logo"
                                            />
                                        </div>
                                        <div className="account-booking-card__info">
                                            <div className="account-booking-card__time">
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Newark(EWR)
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        12:00 pm
                                                    </div>
                                                </div>
                                                <div className="account-booking-card__time-spacer">—</div>
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Newark(EWR)
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        12:00 pm
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="account-booking-card__features">
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Date
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            A12
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Flight time
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            Newark(EWR)
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/gate.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Gate
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            A12
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Seat no.
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            128
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="account-booking-card__buttons">
                                            <button className="button" type="button">
                                                Download Ticket
                                            </button>
                                            <button
                                                className="square-button square-button--border"
                                                type="button"
                                                style={{ width: 48, height: 48 }}
                                            >
                                                <svg width={16} height={16}>
                                                    <use href="#arrow-right" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="account-booking-card">
                                        <div className="account-booking-card__icon">
                                            <img
                                                src="./img/flights/airline-example-1/logo.png"
                                                alt="airline-logo"
                                            />
                                        </div>
                                        <div className="account-booking-card__info">
                                            <div className="account-booking-card__time">
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Newark(EWR)
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        12:00 pm
                                                    </div>
                                                </div>
                                                <div className="account-booking-card__time-spacer">—</div>
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Newark(EWR)
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        12:00 pm
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="account-booking-card__features">
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/calendar.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Date
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            A12
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Flight time
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            Newark(EWR)
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/gate.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Gate
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            A12
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Seat no.
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            128
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="account-booking-card__buttons">
                                            <button className="button" type="button">
                                                Download Ticket
                                            </button>
                                            <button
                                                className="square-button square-button--border"
                                                type="button"
                                                style={{ width: 48, height: 48 }}
                                            >
                                                <svg width={16} height={16}>
                                                    <use href="#arrow-right" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="account-bookings__content"
                                    tab-content="hotels"
                                    tab-group="bookings"
                                >
                                    <div className="account-booking-card">
                                        <div className="account-booking-card__icon">
                                            <img
                                                src="./img/hotels/hotel-example-1/logo.jpg"
                                                alt="hotel-logo"
                                            />
                                        </div>
                                        <div className="account-booking-card__info">
                                            <div className="account-booking-card__time">
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Check-in
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        Thur, Dec 8
                                                    </div>
                                                </div>
                                                <div className="account-booking-card__time-spacer">—</div>
                                                <div className="account-booking-card__time-column">
                                                    <div className="account-booking-time-column-title">
                                                        Check-out
                                                    </div>
                                                    <div className="account-booking-time-column-value">
                                                        Fri, Dec 9
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="account-booking-card__features">
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Check-In
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            12:00pm
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/time.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Check-Out
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            11:30am
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="account-booking-card__feature">
                                                    <div className="account-booking-card__feature-icon">
                                                        <img src="./img/icons/ticket/seat.svg" alt="icon" />
                                                    </div>
                                                    <div className="account-booking-card__feature-content">
                                                        <div className="account-booking-card__feature-title">
                                                            Room №
                                                        </div>
                                                        <div className="account-booking-card__feature-value">
                                                            On arrival
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="account-booking-card__buttons">
                                            <button className="button" type="button">
                                                Download Ticket
                                            </button>
                                            <button
                                                className="square-button square-button--border"
                                                type="button"
                                                style={{ width: 48, height: 48 }}
                                            >
                                                <svg width={16} height={16}>
                                                    <use href="#arrow-right" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <AccountTabsPayment />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Account;