import './ResetPasswordForm.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './../../elements/Button/Button';
import Input from './../../elements/Input/Input';
import { checkEmail } from '../../../utils/validationFunctions';

const ResetPasswordForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailCheckOn, setEmailCheckOn] = useState(false);
    const [emailCheckMsg, setEmailCheckMsg] = useState('');

    // === VALIDATION ===

    function validateForm() {
        let result = [];

        if (!checkEmail(email, setEmailCheckMsg)) {
            setEmailCheckOn(true);
            result.push(false);
        } else {
            setEmailCheckOn(false);
        };

        return !result.includes(false);
    };

    // === SUBMIT FORM ===

    const getFormParams = () => {
        const formParams = {
            email: email.trim(),
        };

        alert(JSON.stringify(formParams));
    };

    return (
        <form className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-wrapper">
                    <Input
                        classes="form msgRight"
                        label="Email"
                        placeholder="Enter e-mail"
                        value={email}
                        onChangeFunction={(event) => setEmail(event.target.value)}
                        validation={emailCheckOn}
                        message={emailCheckMsg}
                    />
                </div>
            </div>
            <div className="login-form__button-group">
                <Button
                    text="Submit"
                    classes="bold"
                    type="submit"
                    action={(event) => {
                        event.preventDefault();
                        if (validateForm()) {
                            getFormParams();
                            navigate('/verify-code');
                        }
                    }}
                />
            </div>
        </form>
    );
}

export default ResetPasswordForm;