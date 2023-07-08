import './AddCardModal.scss'
import { useState } from 'react';
import Input from './../../elements/Input/Input';
import Button from './../../elements/Button/Button';

const AddCardModal = ({ addCard, onClose }) => {
    const [number, setNumber] = useState('');
    const [valid, setValid] = useState('');

    return (
        <>
            <h2>Add new payment card</h2>
            <Input
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
            />
        </>
    );
};

export default AddCardModal;