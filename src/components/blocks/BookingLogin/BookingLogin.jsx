import './BookingLogin.scss'

const BookingLogin = () => {
    return (

        <div className="booking-login">
            <form className="booking-login-form">
                <div className="booking-login-form__title">
                    Login or Sign up to book
                </div>
                <input
                    className="booking-login-form__input"
                    type="text"
                    defaultValue="Phone Number"
                />
                <div className="booking-login-form__notice">
                    We’ll call or text you to confirm your number. Standard message
                    and data rates apply. <a href="#!">Privacy Policy</a>
                </div>
                <button
                    className="button"
                    type="button"
                    style={{ width: "100%" }}
                >
                    Continue
                </button>
            </form>
            <div className="login-with">
                <div className="login-with__header login-with__header--booking-page">
                    <div className="login-with__text login-with__text--booking-page">
                        Or login with
                    </div>
                </div>
                <div className="login-with__buttons">
                    <button
                        className="login-with-button"
                        type="button"
                        style={{ width: "calc((100% - 2 * 16px) / 3)" }}
                    >
                        <div className="button__icon">
                            <svg width={24} height={24}>
                                <use href="#facebook-icon" />
                            </svg>
                        </div>
                    </button>
                    <button
                        className="login-with-button"
                        type="button"
                        style={{ width: "calc((100% - 2 * 16px) / 3)" }}
                    >
                        <div className="button__icon">
                            <svg width={24} height={24}>
                                <use href="#google-icon" />
                            </svg>
                        </div>
                    </button>
                    <button
                        className="login-with-button"
                        type="button"
                        style={{ width: "calc((100% - 2 * 16px) / 3)" }}
                    >
                        <div className="button__icon">
                            <svg width={24} height={24}>
                                <use href="#apple-icon" />
                            </svg>
                        </div>
                    </button>
                    <button
                        className="login-with-button"
                        type="button"
                        style={{ width: "100%" }}
                    >
                        <div className="button__icon">
                            <svg width={24} height={24}>
                                <use href="#apple-icon" />
                            </svg>
                        </div>
                        Continue with email
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookingLogin;