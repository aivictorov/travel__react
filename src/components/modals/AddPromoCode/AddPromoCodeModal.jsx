import './AddPromoCodeModal.scss';
import Button from './../../elements/Button/Button';
import Input from '../../elements/Input/Input';
import { useState } from 'react';
import { checkEmpty } from '../../../utils/validationFunctions';

const AddPromoCodeModal = ({ onClose }) => {

    const [code, setCode] = useState('');
    const [codeCheckOn, setCodeCheckOn] = useState(false);
    const [codeCheckMsg, setCodeCheckMsg] = useState('');

    function validateForm() {
        let result = [];

        if (!checkEmpty(code, setCodeCheckMsg, 'code')) {
            setCodeCheckOn(true);
            result.push(false);
        } else {
            setCodeCheckOn(false);
        };

        return !result.includes(false);
    };

    return (
        <div className='add-promo-code'>
            <h2 className="add-promo-code-modal__title">
                Enter promo code
            </h2>
            <div className="add-promo-code-modal__text">
                Please, enter your promo code in the field:
            </div>
            <div className="add-promo-code__input-wrapper">
                <Input
                    classes="form"
                    label="Promo code"
                    value={code}
                    onChangeFunction={(event) => setCode(event.target.value)}
                    validation={codeCheckOn}
                    message={codeCheckMsg}
                />
            </div>
            <div className="add-promo-code__button-wrapper">
                <Button
                    text="Submit"
                    classes="dark w100"
                    action={(event) => {
                        event.preventDefault();
                        if (validateForm()) {
                            onClose();
                        };
                    }}
                />
            </div>
            <div className="modal__close-button" onClick={onClose}>
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        stroke="none"
                        strokeWidth="2"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="square"
                    >
                        <g transform="translate(1.000000, 1.000000)" stroke="#000">
                            <path d="M0,11 L22,11" />
                            <path d="M11,0 L11,22" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default AddPromoCodeModal;