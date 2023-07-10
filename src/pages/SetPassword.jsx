import { useNavigate } from "react-router-dom";
import LoginHeader from './../components/blocks/LoginHeader/LoginHeader';
import Logo from "../components/blocks/Logo/Logo";
import SetPasswordForm from './../components/forms/SetPasswordForm/SetPasswordForm';
import loginImg from './../img/login/slider/01.jpg';

const SetPassword = () => {
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
                                <LoginHeader
                                    title="Set a password"
                                    text="Your previous password has been reseted. Please set a new
                                    password for your account."
                                />
                                <SetPasswordForm />
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

export default SetPassword;