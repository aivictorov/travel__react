import { useNavigate } from 'react-router-dom';
import LoginHeader from './../components/blocks/LoginHeader/LoginHeader';
import LoginWith from '../components/blocks/LoginWith/LoginWith';
import Logo from './../components/blocks/Logo/Logo';
import ResetPasswordForm from './../components/forms/ResetPasswordForm/ResetPasswordForm';
import loginImg from './../img/login/slider/01.jpg';

const ResetPassword = () => {
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
                                    title="Forgot your password?"
                                    text="Don’t worry, happens to all of us. Enter your email below to recover your password"
                                    link={true}
                                />
                                <ResetPasswordForm />
                                <LoginWith />
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

export default ResetPassword;