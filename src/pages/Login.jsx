import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import Logo from './../components/blocks/Logo/Logo';
import LoginForm from '../components/forms/LoginForm/LoginForm';
import LoginHeader from './../components/blocks/LoginHeader/LoginHeader';
import LoginSlider from '../components/blocks/LoginSlider/LoginSlider';
import LoginWith from '../components/blocks/LoginWith/LoginWith';

const Login = () => {
    const navigate = useNavigate();
    const { setUserAuth } = useContext(AppContext)

    return (
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
                                title="Login"
                                text="Login to access your Golobe account"
                            />
                            <LoginForm />
                            <LoginWith />
                        </div>
                    </div>
                    <div className="login__right">
                        <LoginSlider />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;