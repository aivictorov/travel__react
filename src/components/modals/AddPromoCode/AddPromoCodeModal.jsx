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
                    style="form"
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
                    style="dark w100"
                    action={(event) => {
                        event.preventDefault();
                        if (validateForm()) {
                            onClose();
                        };
                    }}
                />
            </div>
        </div>
    );
}

export default AddPromoCodeModal;