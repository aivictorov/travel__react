import './SetPasswordForm.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './../../elements/Button/Button';
import Input from './../../elements/Input/Input';
import { checkEmpty } from '../../../utils/validationFunctions';

const SetPasswordForm = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [passwordCheckOn, setPasswordCheckOn] = useState(false);
    const [passwordCheckMsg, setPasswordCheckMsg] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordCheckOn, setConfirmPasswordCheckOn] = useState(false);
    const [confirmPasswordCheckMsg, setConfirmPasswordCheckMsg] = useState('');

    // === VALIDATION ===

    function validateForm() {
        let result = [];

        if (!checkEmpty(password, setPasswordCheckMsg)) {
            setPasswordCheckOn(true);
            result.push(false);
        } else {
            setPasswordCheckOn(false);
        };

        if (!checkEmpty(confirmPassword, setConfirmPasswordCheckMsg)) {
            setConfirmPasswordCheckOn(true);
            result.push(false);
        } else {
            setConfirmPasswordCheckOn(false);
        };

        return !result.includes(false);
    };

    // === SUBMIT FORM ===

    const getFormParams = () => {
        const formParams = {
            password: password.trim(),
            confirmPassword: confirmPassword.trim(),
        };

        alert(JSON.stringify(formParams));
    };

    return (
        <div className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-group-row">
                    <div className="login-form__input-wrapper">
                        <Input
                            style="form msgRight"
                            label="Create Password"
                            type="password"
                            placeholder='Enter password'
                            value={password}
                            onChangeFunction={(event) => setPassword(event.target.value)}
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
                            onChangeFunction={(event) => setConfirmPassword(event.target.value)}
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
                        if (validateForm()) {
                            getFormParams();
                            navigate('/login');
                        };
                    }}
                />
            </div>
        </div>
    );
}

export default SetPasswordForm;