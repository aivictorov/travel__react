import Logo from "../components/blocks/Logo/Logo";
import loginImg from './../img/login/slider/01.jpg';

const SignUp = () => {
    return (
        <>
            <main className="sign-up">
                <div className="container">
                    <div className="sign-up__row">
                        <div className="sign-up__left">
                            <div className="login-slider">
                                <img src={loginImg} alt="login" />
                            </div>
                        </div>
                        <div className="sign-up__right">
                            <div className="sign-up__logo">
                                <Logo
                                    mainColor="#000"
                                    accentColor="#8DD3BB"
                                />
                            </div>
                            <div className="sign-up__content">
                                <div className="login-header">
                                    <h1 className="login-header__title">Sign Up</h1>
                                    <div className="login-header__text">
                                        Let’s get you all set up so you can access your personal
                                        account.
                                    </div>
                                </div>
                                <div className="login-form">
                                    <div className="login-form__input-group">
                                        <div className="login-form__input-group-row">
                                            <div className="input" style={{ width: 308 }}>
                                                <input
                                                    className="input__field"
                                                    type="text"
                                                    defaultValue="John"
                                                />
                                                <div className="input__label">First Name</div>
                                            </div>
                                            <div className="input" style={{ width: 308 }}>
                                                <input
                                                    className="input__field"
                                                    type="text"
                                                    defaultValue="Doe"
                                                />
                                                <div className="input__label">Last Name</div>
                                            </div>
                                        </div>
                                        <div className="login-form__input-group-row">
                                            <div className="input" style={{ width: 308 }}>
                                                <input
                                                    className="input__field"
                                                    type="text"
                                                    defaultValue="john.doe@gmail.com"
                                                />
                                                <div className="input__label">Email</div>
                                            </div>
                                            <div className="input" style={{ width: 308 }}>
                                                <input
                                                    className="input__field"
                                                    type="text"
                                                    defaultValue={+79991234567}
                                                />
                                                <div className="input__label">Phone Number</div>
                                            </div>
                                        </div>
                                        <div className="login-form__input-group-row">
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
                                        </div>
                                        <div className="login-form__input-group-row">
                                            <div className="input" style={{ width: "100%" }}>
                                                <input
                                                    className="input__field"
                                                    type="text"
                                                    defaultValue="•••••••••••••••••••••••••"
                                                />
                                                <div className="input__label">Confirm Password</div>
                                                <button className="input__icon" type="button">
                                                    <svg width={24} height={24}>
                                                        <use href="#eye-off"> </use>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="login-form__input-group-row">
                                            <div className="checkbox">
                                                <label className="checkbox__label">
                                                    <input
                                                        className="checkbox__hidden visually-hidden"
                                                        type="checkbox"
                                                    />
                                                    <div className="checkbox__custom" />
                                                    <div className="checkbox__value">
                                                        I agree to all the{" "}
                                                        <a className="login-form__link" href="#!">
                                                            Terms{" "}
                                                        </a>{" "}
                                                        and{" "}
                                                        <a className="login-form__link" href="#!">
                                                            Privacy Policies
                                                        </a>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="login-form__button-group">
                                        <button
                                            className="button button--bold"
                                            type="button"
                                            style={{ width: "100%" }}
                                        >
                                            Create account
                                        </button>
                                        <div className="login-form__sign-up-link-row">
                                            <span className="login-form__text">
                                                Don’t have an account?{" "}
                                            </span>
                                            <a className="login-form__link" href="#!">
                                                Sign up
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="login-with">
                                    <div className="login-with__header">
                                        <div className="login-with__text">Sign up</div>
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
                    </div>
                </div>
            </main>
        </>
    );
}

export default SignUp;