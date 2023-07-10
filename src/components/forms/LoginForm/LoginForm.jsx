import './LoginForm.scss';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './../../../App';
import Button from '../../elements/Button/Button';
import ButtonLink from './../../elements/ButtonLink/ButtonLink';
import Checkbox from './../../elements/Checkbox/Checkbox';
import Input from '../../elements/Input/Input';
import users from './../../../data/users';
import { checkEmail, checkEmpty } from '../../../utils/validationFunctions';

const LoginForm = () => {
    const { setUser, setUserAuth } = useContext(AppContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailCheckOn, setEmailCheckOn] = useState(false);
    const [emailCheckMsg, setEmailCheckMsg] = useState('');

    const [password, setPassword] = useState('');
    const [passwordCheckOn, setPasswordCheckOn] = useState(false);
    const [passwordCheckMsg, setPasswordCheckMsg] = useState('');

    const [remember, setRemember] = useState(false);

    // === VALIDATION ===

    function validateForm() {
        let result = [];

        if (!checkEmail(email, setEmailCheckMsg)) {
            setEmailCheckOn(true);
            result.push(false);
        } else {
            setEmailCheckOn(false);
        };

        if (!checkEmpty(password, setPasswordCheckMsg, 'password')) {
            setPasswordCheckOn(true);
            result.push(false);
        } else {
            setPasswordCheckOn(false);
        };

        return !result.includes(false);
    };

    // === SUBMIT FORM ===

    const getLoginParams = () => {
        const loginParams = {
            email: email.trim(),
            password: password.trim(),
            remember: remember,
        };
        
        authorizeUser(loginParams);
    };

    const authorizeUser = (loginParams) => {
        const user = users.find((user) => {
            return loginParams.email === user.account.email;
        });

        if (user) {
            if (loginParams.password === user.account.password) {
                setUser(user);
                setUserAuth(true)
                navigate("/account");
            } else {
                console.log('Incorrect password');
            }
        } else {
            console.log('User not found');
        };
    };

    return (
        <form className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-wrapper">
                    <Input
                        style="form msgRight"
                        label="Email"
                        placeholder="Enter email"
                        value={email}
                        onChangeFunction={(event) => setEmail(event.target.value)}
                        validation={emailCheckOn}
                        message={emailCheckMsg}
                    />
                </div>
                <div className="login-form__input-wrapper">
                    <Input
                        style="form msgRight"
                        label="Password"
                        type="password"
                        placeholder='Enter password'
                        value={password}
                        onChangeFunction={(event) => setPassword(event.target.value) }
                        validation={passwordCheckOn}
                        message={passwordCheckMsg}
                    />
                </div>
                <div className="login-form__input-group-row">
                    <Checkbox
                        name="remember"
                        text="Remember me"
                        checked={remember}
                        onChangeFunction={setRemember}
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
                    style="bold"
                    type="submit"
                    action={(event) => {
                        event.preventDefault();
                        if (validateForm()) getLoginParams();
                    }}
                />
                <div className="login-form__sign-up-link-row">
                    <span className="login-form__text">
                        Don’t have an account?{" "}
                    </span>
                    <ButtonLink
                        text="Sign up"
                        style="bold"
                        action={() => { navigate('/sign-up') }}
                    />
                </div>
            </div>
        </form>
    );
}

export default LoginForm;