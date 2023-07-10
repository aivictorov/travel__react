import './AddCardButton.scss';
import { useState } from 'react';
import AddCardModal from './AddCardModal';
import Modal from './../Modal/Modal';
import ModalWindow from './../ModalWindow/ModalWindow';

const AddCardButton = ({ addCard }) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="add-card">
                <div className="add-card__content">
                    <button
                        className="add-card__button"
                        modal-button="add-card"
                        type="button"
                        onClick={() => setOpenModal(true)}
                    />
                    <Modal
                        isOpen={openModal}
                        onClose={() => setOpenModal(false)}
                        window={<ModalWindow content={<AddCardModal addCard={addCard} onClose={() => setOpenModal(false)} />} />}
                    />
                    <div className="add-card__text">
                        Add a new card
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddCardButton;