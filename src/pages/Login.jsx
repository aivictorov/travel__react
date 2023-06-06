import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './../components/blocks/Logo/Logo';
import loginImg from './../img/login/slider/01.jpg';

const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <main className="login">
                <div className="container">
                    <div className="login__row">
                        <div className="login__left">
                            <div className="login__logo">
                                <Logo
                                    mainColor="#000"
                                    accentColor="#8DD3BB"
                                />
                            </div>
                            <div className="login__content">
                                <div className="login-header">
                                    <h1 className="login-header__title">Login</h1>
                                    <div className="login-header__text">
                                        Login to access your Golobe account
                                    </div>
                                </div>
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
                                            onClick={() => { navigate("/account") }}
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
                                <div className="login-with">
                                    <div className="login-with__header">
                                        <div className="login-with__text">Or login with</div>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="login__right">
                            <div className="login-slider">
                                <img src={loginImg} alt="login" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;