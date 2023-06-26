import './VerifyCodeForm.scss'
import { useNavigate } from 'react-router-dom';

const VerifyCodeForm = () => {
    const navigate = useNavigate();

    return (
        <div className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-group-row">
                    <div className="input" style={{ width: "100%" }}>
                        <input
                            className="input__field"
                            type="text"
                            placeholder="Enter code"
                            // defaultValue="•••••••••••••••••••••••••"
                        />
                        <div className="input__label">Enter Code</div>
                        <button className="input__icon" type="button">
                            <svg width={24} height={24}>
                                <use href="#eye-off"> </use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="login-form__input-group-row">
                    <span className="login-form__text">
                        Didn’t receive a code?{" "}
                        <a className="login-form__link" href="#!">
                            Resend
                        </a>
                    </span>
                </div>
            </div>
            <div className="login-form__button-group">
                <button
                    className="button button--bold"
                    type="button"
                    style={{ width: "100%" }}
                    onClick={() => { navigate('/set-password') }}
                >
                    Verify
                </button>
            </div>
        </div>
    );
}

export default VerifyCodeForm;