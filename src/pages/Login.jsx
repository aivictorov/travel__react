import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './../components/blocks/Logo/Logo';
import { useContext } from 'react';
import { AppContext } from '../App';
import LoginSlider from '../components/blocks/LoginSlider/LoginSlider';
import LoginForm from '../components/forms/LoginForm/LoginForm';
import LoginWith from '../components/blocks/LoginWith/LoginWith';
import LoginHeader from './../components/blocks/LoginHeader/LoginHeader';

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
                            <LoginHeader />
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