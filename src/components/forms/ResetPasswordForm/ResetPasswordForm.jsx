import './ResetPasswordForm.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './../../elements/Button/Button';
import Input from './../../elements/Input/Input';

const ResetPasswordForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailCheckOn, setEmailCheckOn] = useState(false);
    const [emailCheckMsg, setEmailCheckMsg] = useState('');

    return (
        <div className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-wrapper">
                    <Input
                        label="Email"
                        placeholder="Enter e-mail"
                        value={email}
                        onChangeFunction={setEmail}
                        validation={emailCheckOn}
                        message={emailCheckMsg}
                    />
                </div>
            </div>
            <div className="login-form__button-group">
                <Button
                    text="Submit"
                    style="bold"
                    type="submit"
                    action={(event) => {
                        event.preventDefault();
                        // getLoginParams();
                        navigate('/verify-code')
                    }}
                />
            </div>
        </div>
    );
}

export default ResetPasswordForm;