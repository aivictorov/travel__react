import { forwardRef, useState } from 'react';
import './AddCardModal.scss'
import Input from './../../elements/Input/Input';

const AddCardModal = forwardRef(({ closeModal, addCard }, ref) => {


    const [cardNumber, setCardNumber] = useState('');

    return (
        <div
            className="project-nav-modal"
            modal-window="add-card"
            ref={ref}
            onClick={closeModal}
        >
            <div
                className="project-nav-modal__content"
                modal-content="add-card"
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <div className="project-nav-modal__title">MODAL WINDOW TITLE</div>
                <Input
                    type="text"
                    label="Card Number"
                    placeholder="0000"
                    value={cardNumber}
                    onChangeFunction={setCardNumber}
                />

                <br />
                <br />

                <button
                    type="button"
                    className="button"
                    onClick={() => {
                        addCard(cardNumber);
                        closeModal();
                        setCardNumber('');
                    }}
                >
                    TEST
                </button>

            </div>
            <div className="project-nav-modal__close-button">
                <svg
                    width={30}
                    height={30}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        stroke="none"
                        strokeWidth={2}
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="square"
                    >
                        <g transform="translate(1.000000, 1.000000)" stroke="#ffffff">
                            <path d="M0,11 L22,11" />
                            <path d="M11,0 L11,22" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>

    );
});

export default AddCardModal;