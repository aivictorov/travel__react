import { useNavigate } from "react-router-dom";
import Logo from "../components/blocks/Logo/Logo";
import loginImg from './../img/login/slider/01.jpg';

const VerifyCode = () => {
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
                                    <a className="login-header__link" href="#!">
                                        <svg width={24} height={24}>
                                            <use href="#arrow-left" />
                                        </svg>
                                        Back to login
                                    </a>
                                    <h1 className="login-header__title">Verify code</h1>
                                    <div className="login-header__text">
                                        An authentication code has been sent to your email.
                                    </div>
                                </div>
                                <div className="login-form">
                                    <div className="login-form__input-group">
                                        <div className="login-form__input-group-row">
                                            <div className="input" style={{ width: "100%" }}>
                                                <input
                                                    className="input__field"
                                                    type="text"
                                                    defaultValue="•••••••••••••••••••••••••"
                                                />
                                                <div className="input__label">Enter Code</div>
                                                <button className="input__icon" type="button">
                                                    <svg width={24} height={24}>
                                                        <use href="#eye-off"> </use>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="login-form__input-group-row">
                                            <span className="login-form__text">
                                                Didn’t receive a code?{" "}
                                                <a className="login-form__link" href="#!">
                                                    Resend
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="login-form__button-group">
                                        <button
                                            className="button button--bold"
                                            type="button"
                                            style={{ width: "100%" }}
                                            onClick={() => { navigate('/set-password') }}
                                        >
                                            Verify
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

export default VerifyCode;