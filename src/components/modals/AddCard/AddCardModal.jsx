import './AddCardModal.scss'
import { useState } from 'react';
import Input from './../../elements/Input/Input';
import Button from './../../elements/Button/Button';
import Checkbox from '../../elements/Checkbox/Checkbox';
import { useNavigate } from 'react-router-dom';

const AddCardModal = ({ addCard, onClose }) => {
    const navigate = useNavigate()

    const [number, setNumber] = useState('');
    const [valid, setValid] = useState('');

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

    return (
        <>

            <h2>Add a new card</h2>


            <form className="login-form">
                <div className="login-form__input-group">
                    <div className="login-form__input-group-row">
                        <div className="login-form__input-wrapper">
                            <Input
                                style="form msgRight"
                                label="Card Number"
                                placeholder="John"
                                value={firstName}
                                onChangeFunction={setFirstName}
                                validation={firstNameCheckOn}
                                message={firstNameCheckMsg}
                            />
                        </div>
                    </div>

                    <div className="login-form__input-group-row">
                        <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                            <Input
                                style="form msgRight"
                                label="Exp. Date"
                                placeholder="Enter e-mail"
                                value={email}
                                onChangeFunction={setEmail}
                                validation={emailCheckOn}
                                message={emailCheckMsg}
                            />
                        </div>
                        <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                            <Input
                                style="form msgRight"
                                label="CVC"
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
                                style="form msgRight"
                                label="Name on Card"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChangeFunction={setPassword}
                                validation={passwordCheckOn}
                                message={passwordCheckMsg}
                            />
                        </div>
                    </div>
                    <div className="login-form__input-group-row">
                        <div className="login-form__input-wrapper">
                            <Input
                                style="form msgRight"
                                label="Country or Region"
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
                            text="Securely save my information for 1-click checkout"
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
                            // if (validateForm()) {
                            //     getFormParams();
                            // };
                        }}
                    />
                </div>
            </form>

            {/* <Input
                type="text"
                label="Card Number"
                placeholder="0000"
                value={number}
                onChangeFunction={setNumber}
            />
            <Input
                type="text"
                label="Valid thru"
                placeholder="10/27"
                value={valid}
                onChangeFunction={setValid}
            />
            <Button
                text="Add card"
                action={() => {
                    addCard(number, valid);
                    setNumber('');
                    onClose();
                }}
            /> */}
        </>
    );
};

export default AddCardModal;




// import { useState } from 'react';
// import Checkbox from './../../elements/Checkbox/Checkbox';
// import ButtonLink from '../../elements/ButtonLink/ButtonLink';
// import { useNavigate } from 'react-router-dom';
// import Button from '../../elements/Button/Button';
// import Input from '../../elements/Input/Input';
// import { checkEmail, checkEmpty } from '../../../utils/validationFunctions';
// import DefaultModal from './../../modals/DefaultModal/DefaultModal';


// const SignUpForm = () => {
//     const navigate = useNavigate();



//     // === VALIDATION ===

//     function validateForm() {
//         let result = [];

//         if (!checkEmpty(firstName, setFirstNameCheckMsg, 'first name')) {
//             setFirstNameCheckOn(true);
//             result.push(false);
//         } else {
//             setFirstNameCheckOn(false);
//         };

//         if (!checkEmpty(lastName, setLastNameCheckMsg, 'last name')) {
//             setLastNameCheckOn(true);
//             result.push(false);
//         } else {
//             setLastNameCheckOn(false);
//         };

//         if (!checkEmail(email, setEmailCheckMsg)) {
//             setEmailCheckOn(true);
//             result.push(false);
//         } else {
//             setEmailCheckOn(false);
//         };

//         if (!checkEmpty(phone, setPhoneCheckMsg, 'phone number')) {
//             setPhoneCheckOn(true);
//             result.push(false);
//         } else {
//             setPhoneCheckOn(false);
//         };

//         if (!checkEmpty(password, setPasswordCheckMsg, 'password')) {
//             setPasswordCheckOn(true);
//             result.push(false);
//         } else {
//             setPasswordCheckOn(false);
//         };

//         if (!checkEmpty(confirmPassword, setConfirmPasswordCheckMsg, 'password cofirmation')) {
//             setConfirmPasswordCheckOn(true);
//             result.push(false);
//         } else {
//             setConfirmPasswordCheckOn(false);
//         };

//         if (!agreement) {
//             result.push(false);
//         } else {

//         };

//         return !result.includes(false);
//     };

//     // === SUBMIT FORM ===

//     const getFormParams = () => {
//         const formParams = {
//             firstName: firstName.trim(),
//             lastName: lastName.trim(),
//             email: email.trim(),
//             phone: phone.trim(),
//             password: password,
//             confirmPassword: confirmPassword,
//             agreement: agreement,
//         };

//         alert(JSON.stringify(formParams));
//     };

//     return (


//     );
// }

// export default SignUpForm;