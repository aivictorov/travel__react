import './LoginWith.scss';

const LoginWith = ({ layout }) => {
    let addClass = '';
    if (layout = "booking") addClass = ' login-with--booking'

    return (
        <div className={`login-with${addClass}`}>
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
                    <div className="button__icon">
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
                    <div className="button__icon">
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
                    <div className="button__icon">
                        <svg width={24} height={24}>
                            <use href="#apple-icon" />
                        </svg>
                    </div>
                </button>
                <button
                    className="login-with-button"
                    type="button"
                    style={{ width: "100%" }}
                >
                    <div className="button__icon">
                        <svg width={24} height={24}>
                            <use href="#apple-icon" />
                        </svg>
                    </div>
                    Continue with email
                </button>
            </div>
        </div>
    );
}

export default LoginWith;