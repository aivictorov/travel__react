import './AddCardModal.scss'
import { useState } from 'react';
import Button from './../../elements/Button/Button';
import Checkbox from '../../elements/Checkbox/Checkbox';
import Input from './../../elements/Input/Input';
import { checkEmpty } from '../../../utils/validationFunctions';

const AddCardModal = ({ addCard, onClose }) => {

    const [cardNumber, setCardNumber] = useState('');
    const [cardNumberCheckOn, setCardNumberCheckOn] = useState(false);
    const [cardNumberCheckMsg, setCardNumberCheckMsg] = useState('');

    const [expDate, setExpDate] = useState('');
    const [expDateCheckOn, setExpDateCheckOn] = useState(false);
    const [expDateCheckMsg, setExpDateCheckMsg] = useState('');

    const [email, setEmail] = useState('');
    const [emailCheckOn, setEmailCheckOn] = useState(false);
    const [emailCheckMsg, setEmailCheckMsg] = useState('');

    const [cvc, setCvc] = useState('');
    const [cvcCheckOn, setCvcCheckOn] = useState(false);
    const [cvcCheckMsg, setCvcCheckMsg] = useState('');

    const [name, setName] = useState('');
    const [nameCheckOn, setNameCheckOn] = useState(false);
    const [nameCheckMsg, setNameCheckMsg] = useState('');

    const [country, setCountry] = useState('');
    const [countryCheckOn, setCountryCheckOn] = useState(false);
    const [countryCheckMsg, setCountryCheckMsg] = useState('');

    const [agreement, setAgreement] = useState(false);

    // === VALIDATION ===

    function validateForm() {
        let result = [];

        if (!checkEmpty(cardNumber, setCardNumberCheckMsg, 'card number')) {
            setCardNumberCheckOn(true);
            result.push(false);
        } else {
            setCardNumberCheckOn(false);
        };

        return !result.includes(false);
    };

    return (
        <div className="add-card-modal">
            <h2 className='add-card-modal__title'>
                Add a new card
            </h2>
            <form className="login-form">
                <div className="login-form__input-group">
                    <div className="login-form__input-group-row">
                        <div className="login-form__input-wrapper">
                            <Input
                                style="form msgRight"
                                label="Card Number"
                                placeholder="1234 5678 9012 3456"
                                value={cardNumber}
                                onChangeFunction={setCardNumber}
                                validation={cardNumberCheckOn}
                                message={cardNumberCheckMsg}
                            />
                        </div>
                    </div>

                    <div className="login-form__input-group-row">
                        <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                            <Input
                                style="form msgRight"
                                label="Exp. Date"
                                placeholder="12/24"
                                value={expDate}
                                onChangeFunction={setExpDate}
                                validation={expDateCheckOn}
                                message={expDateCheckMsg}
                            />
                        </div>
                        <div className="login-form__input-wrapper login-form__input-wrapper--w1_2">
                            <Input
                                style="form msgRight"
                                label="CVC"
                                type="password"
                                placeholder="123"
                                value={cvc}
                                onChangeFunction={setCvc}
                                validation={cvcCheckOn}
                                message={cvcCheckMsg}
                            />
                        </div>
                    </div>

                    <div className="login-form__input-group-row">
                        <div className="login-form__input-wrapper">
                            <Input
                                style="form msgRight"
                                label="Name on Card"
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChangeFunction={setName}
                                validation={nameCheckOn}
                                message={nameCheckMsg}
                            />
                        </div>
                    </div>
                    <div className="login-form__input-group-row">
                        <div className="login-form__input-wrapper">
                            <Input
                                style="form msgRight"
                                label="Country or Region"
                                type="text"
                                placeholder="United States"
                                value={country}
                                onChangeFunction={setCountry}
                                validation={countryCheckOn}
                                message={countryCheckMsg}
                            />
                        </div>
                    </div>
                    <div className="login-form__input-group-row">
                        <Checkbox
                            name="agreement"
                            checked={agreement}
                            onChangeFunction={(event) => { setAgreement(event.target.checked) }}
                            text="Securely save my information for 1-click checkout"
                        />
                    </div>
                </div>
                <div className="login-form__button-group">
                    <Button
                        text="Create account"
                        type="submit"
                        style="dark bold w100"
                        action={(event) => {
                            event.preventDefault();
                            if (validateForm()) {
                                addCard(cardNumber, expDate);
                                onClose();
                            };
                        }}
                    />
                </div>
            </form>
        </div>
    );
};

export default AddCardModal;