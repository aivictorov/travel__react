import './BookingLogin.scss'
import Button from '../../elements/Button/Button';
import LoginWith from './../LoginWith/LoginWith';

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
                    placeholder="Phone Number"
                />
                <div className="booking-login-form__notice">
                    We’ll call or text you to confirm your number. Standard message
                    and data rates apply.
                </div>
                <Button text="Continue" style="w100" />
            </form>

            <LoginWith layout="booking" />
        </div>
    );
}

export default BookingLogin;