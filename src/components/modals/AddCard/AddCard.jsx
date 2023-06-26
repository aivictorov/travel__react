import './AddCard.scss';
import AddCardModal from './AddCardModal';
import { useEffect, useRef } from 'react';

const AddCard = ({ addCard }) => {
    const addCardModalRef = useRef(null);

    const openModal = (ref) => {
        ref.current.classList.add('active');
    };

    const closeModal = (ref) => {
        ref.current.classList.remove('active');
    };

    useEffect(() => {
        function closeModalByKey(event) {
            if (event.key === 'Escape') addCardModalRef.current.classList.remove('active');
        };
        document.addEventListener('keydown', closeModalByKey);
        return () => document.removeEventListener('keydown', closeModalByKey);
    }, []);

    return (
        <>
            <div className="add-card">
                <div className="add-card__content">
                    <button
                        className="add-card__button"
                        modal-button="add-card"
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            openModal(addCardModalRef);
                        }}
                    />
                    <div className="add-card__text">
                        Add a new card
                    </div>
                </div>
            </div>

            <AddCardModal
                ref={addCardModalRef}
                closeModal={() => { closeModal(addCardModalRef) }}
                addCard={addCard}
            />
        </>
    );
}

export default AddCard;