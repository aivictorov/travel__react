import './SignUpForm.scss';
import { useRef, useState } from 'react';
import Checkbox from './../../elements/Checkbox/Checkbox';
import Modal from './../../modals/Modal/Modal';
import ModalWindow from './../../modals/ModalWindow/ModalWindow';
import Terms from './../../modals/Terms/Terms';
import ButtonLink from '../../elements/ButtonLink/ButtonLink';
import PrivacyPolicy from './../../modals/PrivacyPolicy/PrivacyPolicy';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button/Button';

const SignUpForm = () => {
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const rememberCheckboxRef = useRef();


    const [openTermsModal, setOpenTermsModal] = useState(false);
    const [openPrivacyPolicyModal, setOpenPrivacyPolicyModal] = useState(false);

    const navigate = useNavigate();


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
                                <ButtonLink
                                    text="Terms"
                                    action={() => { setOpenTermsModal(true) }}
                                />
                                <Modal
                                    isOpen={openTermsModal}
                                    onClose={() => setOpenTermsModal(false)}
                                    window={<ModalWindow content={<Terms />} />}
                                />
                                {" and "}
                                <ButtonLink
                                    text="Privacy Policies"
                                    action={() => { setOpenPrivacyPolicyModal(true) }}
                                />
                                <Modal
                                    isOpen={openPrivacyPolicyModal}
                                    onClose={() => setOpenPrivacyPolicyModal(false)}
                                    window={<ModalWindow content={<PrivacyPolicy />} />}
                                />
                            </>
                        }
                        ref={rememberCheckboxRef}
                    />
                </div>
            </div>
            <div className="login-form__button-group">
                <Button
                    text="Create account"
                    style="bold w100"
                    action={() => {
                        if (!rememberCheckboxRef.current.checked) alert('ALERT');
                    }}
                />
                <div className="login-form__sign-up-link-row">
                    <span className="login-form__text">
                        Do you already have an account?
                        {" "}
                    </span>
                    <ButtonLink
                        text="Login"
                        style="bold"
                        action={() => { navigate('/login') }}
                    />
                </div>
            </div>
        </div>

    );
}

export default SignUpForm;