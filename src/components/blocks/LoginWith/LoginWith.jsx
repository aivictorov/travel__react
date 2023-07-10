import './LoginWith.scss';
import { addClass } from '../../../utils/functions';

const LoginWith = ({ layout }) => {
    const add = addClass('login-with', layout);
    const buttons = ['facebook-icon', 'google-icon', 'apple-icon']

    return (
        <div className={'login-with' + add}>
            <div className="login-with__header">
                <div className="login-with__text">
                    Or login with
                </div>
            </div>
            <div className="login-with__buttons">
                <button
                    className="login-with-button"
                    type="button"
                    style={{ width: "calc((100% - 2 * 16px) / 3)" }}
                >
                    <div className="login-with-button__icon">
                        <svg width={24} height={24}>
                            <use href="#facebook-icon" />
                        </svg>
                    </div>
                </button>
                <button
                    className="login-with-button"
                    type="button"
                    style={{ width: "calc((100% - 2 * 16px) / 3)" }}
                >
                    <div className="login-with-button__icon">
                        <svg width={24} height={24}>
                            <use href="#google-icon" />
                        </svg>
                    </div>
                </button>
                <button
                    className="login-with-button"
                    type="button"
                    style={{ width: "calc((100% - 2 * 16px) / 3)" }}
                >
                    <div className="login-with-button__icon">
                        <svg width={24} height={24}>
                            <use href="#apple-icon" />
                        </svg>
                    </div>
                </button>

                {layout !== "booking" &&
                    <button
                        className="login-with-button"
                        type="button"
                        style={{ width: "100%" }}
                    >
                        <div className="login-with-button__icon">
                            <svg width={24} height={24}>
                                <use href="#apple-icon" />
                            </svg>
                        </div>
                        Continue with email
                    </button>
                }


            </div>
        </div>
    );
}

export default LoginWith;