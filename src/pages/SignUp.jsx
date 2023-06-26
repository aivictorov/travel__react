import Logo from "../components/blocks/Logo/Logo";
import loginImg from './../img/login/slider/01.jpg';
import SignUpForm from './../components/forms/SignUpForm/SignUpForm';
import LoginWith from "../components/blocks/LoginWith/LoginWith";
import LoginHeader from './../components/blocks/LoginHeader/LoginHeader';

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
                                <LoginHeader
                                    title="Sign Up"
                                    text="Let’s get you all set up so you can access your personal account."
                                />
                                <SignUpForm />
                                <LoginWith />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default SignUp;