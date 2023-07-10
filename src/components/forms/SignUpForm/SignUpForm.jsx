import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/Button/Button';
import ButtonLink from '../../elements/ButtonLink/ButtonLink';
import Checkbox from './../../elements/Checkbox/Checkbox';
import DefaultModal from './../../modals/DefaultModal/DefaultModal';
import Input from '../../elements/Input/Input';
import { checkEmail, checkEmpty } from '../../../utils/validationFunctions';

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

    // === VALIDATION ===

    function validateForm() {
        let result = [];

        if (!checkEmpty(firstName, setFirstNameCheckMsg, 'first name')) {
            setFirstNameCheckOn(true);
            result.push(false);
        } else {
            setFirstNameCheckOn(false);
        };

        if (!checkEmpty(lastName, setLastNameCheckMsg, 'last name')) {
            setLastNameCheckOn(true);
            result.push(false);
        } else {
            setLastNameCheckOn(false);
        };

        if (!checkEmail(email, setEmailCheckMsg)) {
            setEmailCheckOn(true);
            result.push(false);
        } else {
            setEmailCheckOn(false);
        };

        if (!checkEmpty(phone, setPhoneCheckMsg, 'phone number')) {
            setPhoneCheckOn(true);
            result.push(false);
        } else {
            setPhoneCheckOn(false);
        };

        if (!checkEmpty(password, setPasswordCheckMsg, 'password')) {
            setPasswordCheckOn(true);
            result.push(false);
        } else {
            setPasswordCheckOn(false);
        };

        if (!checkEmpty(confirmPassword, setConfirmPasswordCheckMsg, 'password cofirmation')) {
            setConfirmPasswordCheckOn(true);
            result.push(false);
        } else {
            setConfirmPasswordCheckOn(false);
        };

        if (!agreement) {
            result.push(false);
        } else {

        };

        return !result.includes(false);
    };

    // === SUBMIT FORM ===

    const getFormParams = () => {
        const formParams = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            password: password,
            confirmPassword: confirmPassword,
            agreement: agreement,
        };

        alert(JSON.stringify(formParams));
    };

    return (
        <form className="login-form">
            <div className="login-form__input-group">
                <div className="login-form__input-group-row">
                    <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                        <Input
                            style="form msgRight"
                            label="First Name"
                            placeholder="John"
                            value={firstName}
                            onChangeFunction={(event) => setFirstName(event.target.value)}
                            validation={firstNameCheckOn}
                            message={firstNameCheckMsg}
                        />
                    </div>
                    <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                        <Input
                            style="form msgRight"
                            label="Last Name"
                            placeholder="Doe"
                            value={lastName}
                            onChangeFunction={(event) => setLastName(event.target.value)} 
                            validation={lastNameCheckOn}
                            message={lastNameCheckMsg}
                        />
                    </div>
                </div>

                <div className="login-form__input-group-row">
                    <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                        <Input
                            style="form msgRight"
                            label="Email"
                            placeholder="Enter e-mail"
                            value={email}
                            onChangeFunction={(event) => setEmail(event.target.value)} 
                            validation={emailCheckOn}
                            message={emailCheckMsg}
                        />
                    </div>
                    <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                        <Input
                            style="form msgRight"
                            label="Phone Number"
                            placeholder="+79991234567"
                            value={phone}
                            onChangeFunction={(event) => setPhone(event.target.value)}
                            validation={phoneCheckOn}
                            message={phoneCheckMsg}
                        />
                    </div>
                </div>

                <div className="login-form__input-group-row">
                    <div className="login-form__input-wrapper">
                        <Input
                            style="form msgRight"
                            label="Password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChangeFunction={(event) => setPassword(event.target.value)}
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
                            style="form msgRight"
                            label="Confirm Password"
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChangeFunction={(event) => setConfirmPassword(event.target.value)}
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
                                <DefaultModal
                                    isOpen={openTermsModal}
                                    onClose={() => setOpenTermsModal(false)}
                                    title="Terms"
                                    text={
                                        <>
                                            <p>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
                                            <p>This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.</p>
                                        </>
                                    }
                                />
                                {" and "}
                                <ButtonLink
                                    text="Privacy policies"
                                    action={() => { setOpenPrivacyPolicyModal(true) }}
                                />
                                <DefaultModal
                                    isOpen={openPrivacyPolicyModal}
                                    onClose={() => setOpenPrivacyPolicyModal(false)}
                                    title="Privacy Policy"
                                    text={
                                        <>
                                            <p>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
                                            <p>This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.</p>
                                        </>
                                    }
                                />
                            </>
                        }
                    />
                </div>
            </div>
            <div className="login-form__button-group">
                <Button
                    text="Create account"
                    type="submit"
                    style="bold w100"
                    action={(event) => {
                        event.preventDefault();
                        if (validateForm()) {
                            getFormParams();
                        };
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
        </form>
    );
}

export default SignUpForm;