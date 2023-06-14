import { useContext } from 'react';
import './LoginForm.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from './../../../App';

const LoginForm = () => {
    const { setUserAuth } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="login-form">
            <div className="login-form__input-group">
                <div className="input" style={{ width: "100%" }}>
                    <input
                        className="input__field"
                        type="text"
                        defaultValue="john.doe@gmail.com"
                    />
                    <div className="input__label">Email</div>
                </div>
                <div className="input" style={{ width: "100%" }}>
                    <input
                        className="input__field"
                        type="text"
                        defaultValue="•••••••••••••••••••••••••"
                    />
                    <div className="input__label">Password</div>
                    <button className="input__icon" type="button">
                        <svg width={24} height={24}>
                            <use href="#eye-off"> </use>
                        </svg>
                    </button>
                </div>
                <div className="login-form__input-group-row">
                    <div className="checkbox">
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value">Remember me</div>
                        </label>
                    </div>
                    <NavLink className="login-form__link" to="/reset-password">
                        Forgot Password
                    </NavLink>
                </div>
            </div>
            <div className="login-form__button-group">
                <button
                    className="button button--bold"
                    type="button"
                    style={{ width: "100%" }}
                    onClick={() => {
                        setUserAuth(true);
                        navigate("/account");
                    }}
                >
                    Login
                </button>
                <div className="login-form__sign-up-link-row">
                    <span className="login-form__text">
                        Don’t have an account?{" "}
                    </span>
                    <NavLink className="login-form__link" to="/sign-up">
                        Sign up
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;