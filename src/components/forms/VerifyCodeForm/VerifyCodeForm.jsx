import './VerifyCodeForm.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './../../elements/Button/Button';
import ButtonLink from './../../elements/ButtonLink/ButtonLink';
import Input from './../../elements/Input/Input';
import { checkEmpty } from '../../../utils/validationFunctions';

const VerifyCodeForm = () => {
    const navigate = useNavigate();

    const [code, setCode] = useState('');
    const [codeCheckOn, setCodeCheckOn] = useState(false);
    const [codeCheckMsg, setCodeCheckMsg] = useState('');

    // === VALIDATION ===

    function validateForm() {
        let result = [];

        if (!checkEmpty(code, setCodeCheckMsg)) {
            setCodeCheckOn(true);
            result.push(false);
        } else {
            setCodeCheckOn(false);
        };

        return !result.includes(false);
    };

    // === SUBMIT FORM ===

    const getFormParams = () => {
        const formParams = {
            code: code.trim(),
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
                            name="code"
                            type="password"
                            label="Enter code"
                            placeholder="Enter code"
                            value={code}
                            onChangeFunction={setCode}
                            validation={codeCheckOn}
                            message={codeCheckMsg}
                        />
                    </div>
                </div>
                <div className="login-form__input-group-row">
                    <span className="login-form__text">
                        {"Didn’t receive a code? "}
                        <ButtonLink text="Resend" />
                    </span>
                </div>
            </div>
            <div className="login-form__button-group">
                <Button
                    text="Verify"
                    style="bold"
                    type="submit"
                    action={(event) => {
                        event.preventDefault();
                        if (validateForm()) {
                            getFormParams();
                            navigate('/set-password');
                        };
                    }}
                />
            </div>
        </div>
    );
}

export default VerifyCodeForm;