import Modal from '../../modals/Modal/Modal';
import './BookingPaymentMethods.scss'
import { useState } from 'react';
import PaymentInfo from '../../modals/PaymentInfo/PaymentInfo';
import ModalWindow from '../../modals/ModalWindow/ModalWindow';

const BookingPaymentMethods = () => {

    const [value, setValue] = useState('full');

    const methods = [
        {
            title: "Pay in full",
            description: "Pay the total and you are all set",
            style: "h80",
            id: "full-payment",
            value: "full",
        },
        {
            title: "Pay part now, part later",
            description: "Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.",
            style: "h100",
            id: "partial-payment",
            value: "partial",
        },
    ];

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="booking-payment-methods">
            {methods.map((item, index) => {
                const addClass = "payment-radio--" + item.style
                return (
                    <div
                        key={index}
                        className={`payment-radio ${addClass}`}
                    >
                        <input
                            className="payment-radio__input visually-hidden"
                            type="radio"
                            name="pay-methods"
                            id={item.id}
                            value={item.value}
                            checked={value === item.value ? true : false}
                            onChange={(event) => {
                                setValue(event.target.value);
                            }}
                        />
                        <label
                            className="payment-radio__label"
                            htmlFor={item.id}
                        >
                            <div className="payment-radio__label-title">
                                {item.title}
                            </div>
                            <div className="payment-radio__label-text">
                                {item.description}
                            </div>
                            <div className="payment-radio__custom-input"> </div>
                        </label>
                    </div>
                )
            })}

            <button
                type="button"
                className="booking-payment-methods__button"
                onClick={() => { setOpenModal(true) }}
            >
                More info
            </button>

            <Modal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                window={<ModalWindow content={
                    <PaymentInfo onClose={() => setOpenModal(false)} />
                } />}
            />

        </div>
    );
}

export default BookingPaymentMethods;