import './LoginForm.scss';
import { useContext, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from './../../../App';
import Button from '../../elements/Button/Button';
import Checkbox from './../../elements/Checkbox/Checkbox';
import ButtonLink from './../../elements/ButtonLink/ButtonLink';

const LoginForm = () => {
    const { setUserAuth } = useContext(AppContext);
    const navigate = useNavigate();

    const inputPasswordRef = useRef();

    return (
        <div className="login-form">
            <div className="login-form__input-group">
                <div className="input" style={{ width: "100%" }}>
                    <input
                        className="input__field"
                        type="text"
                        placeholder="Enter e-mail"
                        // defaultValue="john.doe@gmail.com"
                    />
                    <div className="input__label">Email</div>
                </div>
                <div className="input" style={{ width: "100%" }}>
                    <input
                        ref={inputPasswordRef}
                        className="input__field"
                        type="password"
                        placeholder='Enter password'
                    />
                    <div className="input__label">Password</div>
                    <button
                        className="input__icon"
                        type="button"
                        onClick={() => {
                            if (inputPasswordRef.current.type === "password") {
                                inputPasswordRef.current.type = "text";
                            } else if (inputPasswordRef.current.type === "text") {
                                inputPasswordRef.current.type = "password"
                            }
                        }}
                    >
                        <svg width={24} height={24}>
                            <use href="#eye-off"> </use>
                        </svg>
                    </button>
                </div>
                <div className="login-form__input-group-row">
                    <Checkbox
                        name="Remember me"
                    />
                    <ButtonLink
                        text="Forgot Password"
                        action={() => { navigate('/reset-password') }}
                    />
                </div>
            </div>
            <div className="login-form__button-group">
                <Button
                    text="Login"
                    action={() => {
                        setUserAuth(true);
                        navigate("/account");
                    }}
                />
                <div className="login-form__sign-up-link-row">
                    <span className="login-form__text">
                        Don’t have an account?
                        {" "}
                    </span>
                    <ButtonLink
                        text="Sign up"
                        style="bold"
                        action={() => { navigate('/sign-up') }}
                    />
                </div>
            </div>
        </div>
    );
}

export default LoginForm;