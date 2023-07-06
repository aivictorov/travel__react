import './VerifyCodeForm.scss'
import { useNavigate } from 'react-router-dom';
import ButtonLink from './../../elements/ButtonLink/ButtonLink';
import { useState } from 'react';
import Input from './../../elements/Input/Input';
import Button from './../../elements/Button/Button';

const VerifyCodeForm = () => {
    const navigate = useNavigate();

    const [code, setCode] = useState('');
    const [codeCheckOn, setCodeCheckOn] = useState(false);
    const [codeCheckMsg, setCodeCheckMsg] = useState('');

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
                        // getLoginParams();
                        navigate('/set-password')
                    }}
                />
            </div>
        </div>
    );
}

export default VerifyCodeForm;