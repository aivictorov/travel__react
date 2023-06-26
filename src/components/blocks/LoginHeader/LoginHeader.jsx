import './LoginHeader.scss';
import { NavLink } from 'react-router-dom';

const LoginHeader = ({ title, text, link = false }) => {

    return (
        <div className="login-header">
            {link &&
                <NavLink className="login-header__link" to="/login">
                    <svg width={24} height={24}>
                        <use href="#arrow-left" />
                    </svg>
                    Back to login
                </NavLink>
            }
            <h1 className="login-header__title">
                {title}
            </h1>
            <div className="login-header__text">
                {text}
            </div>
        </div>
    );
}

export default LoginHeader;