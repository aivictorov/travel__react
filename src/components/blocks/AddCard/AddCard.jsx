import './AddCard.scss';
import AddCardModal from './AddCardModal';
import { useEffect, useRef } from 'react';

const AddCard = ({ addCard }) => {
    const addCardModalRef = useRef(null);

    const openModal = () => {
        addCardModalRef.current.classList.add('active');
    };

    const closeModal = () => {
        addCardModalRef.current.classList.remove('active');
    };

    useEffect(() => {
        const closeDropdownByKey = (event) => {
            if (event.key === 'Escape') addCardModalRef.current.classList.remove('active');
        };
        document.addEventListener('keydown', closeDropdownByKey);
        return () => document.removeEventListener('keydown', closeDropdownByKey);
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
                            openModal();
                        }}
                    />
                    <div className="add-card__text">
                        Add a new card
                    </div>
                </div>

            </div>
            <AddCardModal
                ref={addCardModalRef}
                closeModal={closeModal}
                addCard={addCard}
            />
        </>
    );
}

export default AddCard;