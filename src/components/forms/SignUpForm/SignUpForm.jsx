// import './SignUpForm.scss';

import { useState } from 'react';
import Checkbox from './../../elements/Checkbox/Checkbox';
import Modal from './../../modals/Modal/Modal';
import ModalWindow from './../../modals/ModalWindow/ModalWindow';
import Terms from './../../modals/Terms/Terms';
import ButtonLink from '../../elements/ButtonLink/ButtonLink';
import PrivacyPolicy from './../../modals/PrivacyPolicy/PrivacyPolicy';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button/Button';
import Input from '../../elements/Input/Input';

const SignUpForm = () => {
    const navigate = useNavigate();

    const [openTermsModal, setOpenTermsModal] = useState(false);
    const [openPrivacyPolicyModal, setOpenPrivacyPolicyModal] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [firstNameCheckOn, setFirstNameCheckOn] = useState(false);
    const [firstNameCheckMsg, setFirstNameCheckMsg] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameCheckOn, setLastNameCheckOn] = useState(false);
    const [lastNameCheckMsg, setLastNameCheckMsg] = useState('');

    const [email, setEmail] = useState('');
    const [emailCheckOn, setEmailCheckOn] = useState(false);
    const [emailCheckMsg, setEmailCheckMsg] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneCheckOn, setPhoneCheckOn] = useState(false);
    const [phoneCheckMsg, setPhoneCheckMsg] = useState('');

    const [password, setPassword] = useState('');
    const [passwordCheckOn, setPasswordCheckOn] = useState(false);
    const [passwordCheckMsg, setPasswordCheckMsg] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordCheckOn, setConfirmPasswordCheckOn] = useState(false);
    const [confirmPasswordCheckMsg, setConfirmPasswordCheckMsg] = useState('');

    const [agreement, setAgreement] = useState(true);

    const getSignUpParams = () => {
        // if (validateForm()) {
            const signUpParams = {
                firstName:firstName.trim(),
                lastName:lastName.trim(),
                email:email.trim(),
                phone:phone.trim(),
                password:password,
                confirmPassword:confirmPassword,
                agreement:agreement,
            };
            alert(JSON.stringify(signUpParams));
        // };
    };

    return (
        <div className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-group-row">
                    <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                        <Input
                            label="First Name"
                            placeholder="John"
                            value={firstName}
                            onChangeFunction={setFirstName}
                            validation={firstNameCheckOn}
                            message={firstNameCheckMsg}
                        />
                    </div>
                    <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                        <Input
                            label="Last Name"
                            placeholder="Doe"
                            value={lastName}
                            onChangeFunction={setLastName}
                            validation={lastNameCheckOn}
                            message={lastNameCheckMsg}
                        />
                    </div>
                </div>

                <div className="login-form__input-group-row">
                    <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                        <Input
                            label="Email"
                            placeholder="Enter e-mail"
                            value={email}
                            onChangeFunction={setEmail}
                            validation={emailCheckOn}
                            message={emailCheckMsg}
                        />
                    </div>
                    <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                        <Input
                            label="Phone Number"
                            placeholder="+79991234567"
                            value={phone}
                            onChangeFunction={setPhone}
                            validation={phoneCheckOn}
                            message={phoneCheckMsg}
                        />
                    </div>
                </div>

                <div className="login-form__input-group-row">

                    <div className="login-form__input-wrapper">
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChangeFunction={setPassword}
                            validation={passwordCheckOn}
                            message={passwordCheckMsg}
                        />
                    </div>

                    {/* <button
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
                    </button> */}
                </div>

                <div className="login-form__input-group-row">
                    <div className="login-form__input-wrapper">
                        <Input
                            label="Confirm Password"
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChangeFunction={setConfirmPassword}
                            validation={confirmPasswordCheckOn}
                            message={confirmPasswordCheckMsg}
                        />
                    </div>
                </div>



                <div className="login-form__input-group-row">
                    <Checkbox
                        name="agreement"
                        checked={agreement}
                        onChangeFunction={setAgreement}
                        text={
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
                    />
                </div>
            </div>
            <div className="login-form__button-group">
                <Button
                    text="Create account"
                    style="bold w100"
                    action={() => {
                        getSignUpParams()
                        // if (!rememberCheckboxRef.current.checked) alert('ALERT');
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