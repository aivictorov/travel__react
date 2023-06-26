import './SetPasswordForm.scss'
import { useNavigate } from 'react-router-dom';

const SetPasswordForm = () => {
    const navigate = useNavigate();

    return (
        <div className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-group-row">
                    <div className="input" style={{ width: "100%" }}>
                        <input
                            className="input__field"
                            type="text"
                            placeholder="Enter password"
                            // defaultValue="•••••••••••••••••••••••••"
                        />
                        <div className="input__label">Create Password</div>
                        <button className="input__icon" type="button">
                            <svg width={24} height={24}>
                                <use href="#eye-off"> </use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="login-form__input-group-row">
                    <div className="input" style={{ width: "100%" }}>
                        <input
                            className="input__field"
                            type="text"
                            placeholder="Re-enter password"
                            // defaultValue="•••••••••••••••••••••••••"
                        />
                        <div className="input__label">Re-enter Password</div>
                        <button className="input__icon" type="button">
                            <svg width={24} height={24}>
                                <use href="#eye-off"> </use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="login-form__button-group">
                <button
                    className="button button--bold"
                    type="button"
                    style={{ width: "100%" }}
                    onClick={() => { navigate('/login') }}
                >
                    Set password
                </button>
            </div>
        </div>
    );
}

export default SetPasswordForm;