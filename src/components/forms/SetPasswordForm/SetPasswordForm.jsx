import './SetPasswordForm.scss'
import { useNavigate } from 'react-router-dom';
import Button from './../../elements/Button/Button';
import { useState } from 'react';
import Input from './../../elements/Input/Input';

const SetPasswordForm = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [passwordCheckOn, setPasswordCheckOn] = useState(false);
    const [passwordCheckMsg, setPasswordCheckMsg] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordCheckOn, setConfirmPasswordCheckOn] = useState(false);
    const [confirmPasswordCheckMsg, setConfirmPasswordCheckMsg] = useState('');

    return (
        <div className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-group-row">
                    <div className="login-form__input-wrapper">
                        <Input
                            label="Create Password"
                            type="password"
                            placeholder='Enter password'
                            value={password}
                            onChangeFunction={setPassword}
                            validation={passwordCheckOn}
                            message={passwordCheckMsg}
                        />
                    </div>
                </div>
                <div className="login-form__input-group-row">
                    <div className="login-form__input-wrapper">
                        <Input
                            style="form msgRight"
                            label="Re-enter password"
                            type="password"
                            placeholder="Re-enter password"
                            value={confirmPassword}
                            onChangeFunction={setConfirmPassword}
                            validation={confirmPasswordCheckOn}
                            message={confirmPasswordCheckMsg}
                        />
                    </div>
                </div>
            </div>
            <div className="login-form__button-group">
                <Button
                    text="Set password"
                    style="bold"
                    type="submit"
                    action={(event) => {
                        event.preventDefault();
                        // getLoginParams();
                        navigate('/login')
                    }}
                />
            </div>
        </div>
    );
}

export default SetPasswordForm;