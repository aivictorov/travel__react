import './AddCardModal.scss'
import { useState } from 'react';
import Input from './../../elements/Input/Input';
import Button from './../../elements/Button/Button';

const AddCardModal = ({ addCard, onClose }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardValidThru, setCardValidThru] = useState('');

    return (
        <>
            <h2>Add new payment card</h2>
            <Input
                type="text"
                label="Card Number"
                placeholder="0000"
                value={cardNumber}
                onChangeFunction={setCardNumber}
            />
            <Input
                type="text"
                label="Valid thru"
                placeholder="10/27"
                value={cardValidThru}
                onChangeFunction={setCardValidThru}
            />
            <Button
                text="Add card"
                action={() => {
                    addCard(cardNumber);
                    setCardNumber('');
                    onClose();
                }}
            />
        </>
    );
};

export default AddCardModal;