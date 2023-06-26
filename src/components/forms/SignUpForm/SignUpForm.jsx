import './SignUpForm.scss';
import { useRef } from 'react';
import Checkbox from './../../elements/Checkbox/Checkbox';

const SignUpForm = () => {
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const rememberCheckboxRef = useRef();

    return (
        <div className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-group-row">
                    <div className="input" style={{ width: 308 }}>
                        <input
                            className="input__field"
                            type="text"
                            placeholder="John"
                        />
                        <div className="input__label">First Name</div>
                    </div>
                    <div className="input" style={{ width: 308 }}>
                        <input
                            className="input__field"
                            type="text"
                            placeholder="Doe"
                        />
                        <div className="input__label">Last Name</div>
                    </div>
                </div>
                <div className="login-form__input-group-row">
                    <div className="input" style={{ width: 308 }}>
                        <input
                            className="input__field"
                            type="text"
                            placeholder="Enter e-mail"
                        />
                        <div className="input__label">Email</div>
                    </div>
                    <div className="input" style={{ width: 308 }}>
                        <input
                            className="input__field"
                            type="text"
                            placeholder="+79991234567"
                        />
                        <div className="input__label">Phone Number</div>
                    </div>
                </div>

                <div className="login-form__input-group-row">
                    <div className="input" style={{ width: "100%" }}>
                        <input
                            className="input__field"
                            type="text"
                            placeholder='Enter password'
                            ref={passwordRef}
                        />
                        <div className="input__label">Password</div>
                        <button
                            className="input__icon"
                            type="button"
                            onClick={() => {
                                if (passwordRef.current.type === "password") {
                                    passwordRef.current.type = "text";
                                } else if (passwordRef.current.type === "text") {
                                    passwordRef.current.type = "password"
                                }
                            }}
                        >
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
                            ref={confirmPasswordRef}
                            placeholder='Confirm password'
                        // defaultValue="•••••••••••••••••••••••••"

                        />
                        <div className="input__label">Confirm Password</div>
                        <button
                            className="input__icon"
                            type="button"
                            onClick={() => {
                                if (confirmPasswordRef.current.type === "password") {
                                    confirmPasswordRef.current.type = "text";
                                } else if (confirmPasswordRef.current.type === "text") {
                                    confirmPasswordRef.current.type = "password"
                                }
                            }}
                        >
                            <svg width={24} height={24}>
                                <use href="#eye-off"> </use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="login-form__input-group-row">

                    <Checkbox
                        name={
                            <>
                                {"I agree to all the "}
                                <a className="login-form__link" href="#!">Terms</a>
                                {" and "}
                                <a className="login-form__link" href="#!">Privacy Policies</a>
                            </>
                        }
                        ref={rememberCheckboxRef}
                    />

                    {/* <div
                        className="checkbox"
                    >
                        <label className="checkbox__label">
                            <input
                                className="checkbox__hidden visually-hidden"
                                type="checkbox"
                            />
                            <div className="checkbox__custom" />
                            <div className="checkbox__value">
                                I agree to all the{" "}
                                <a className="login-form__link" href="#!">
                                    Terms{" "}
                                </a>{" "}
                                and{" "}
                                <a className="login-form__link" href="#!">
                                    Privacy Policies
                                </a>
                            </div>
                        </label>
                    </div> */}
                </div>
            </div>
            <div className="login-form__button-group">
                <button
                    className="button button--bold"
                    type="button"
                    style={{ width: "100%" }}
                    onClick={() => {
                        if (!rememberCheckboxRef.current.checked) alert('ALERT')
                    }}
                >
                    Create account
                </button>
                <div className="login-form__sign-up-link-row">
                    <span className="login-form__text">
                        Do you already have an account?{" "}
                    </span>
                    <a className="login-form__link" href="#!">
                        Login
                    </a>
                </div>
            </div>
        </div>

    );
}

export default SignUpForm;