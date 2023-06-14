import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './../components/blocks/Logo/Logo';
import { useContext } from 'react';
import { AppContext } from '../App';
import LoginSlider from '../components/blocks/LoginSlider/LoginSlider';
import LoginForm from '../components/blocks/LoginForm/LoginForm';

const Login = () => {
    const navigate = useNavigate();
    const { setUserAuth } = useContext(AppContext)

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

                                <LoginForm />

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

                            <LoginSlider />

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;