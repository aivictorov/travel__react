import './ResetPasswordForm.scss';
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm = () => {
    const navigate = useNavigate();

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
            </div>
            <div className="login-form__button-group">
                <button
                    className="button button--bold"
                    type="button"
                    style={{ width: "100%" }}
                    onClick={() => { navigate('/verify-code') }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default ResetPasswordForm;