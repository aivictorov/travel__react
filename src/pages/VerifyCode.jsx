import loginImg from './../img/login/slider/01.jpg';
import LoginHeader from './../components/blocks/LoginHeader/LoginHeader';
import Logo from "../components/blocks/Logo/Logo";
import VerifyCodeForm from './../components/forms/VerifyCodeForm/VerifyCodeForm';

const VerifyCode = () => {
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
                                    title="Verify code"
                                    text="An authentication code has been sent to your email."
                                    link={true}
                                />
                                <VerifyCodeForm />
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