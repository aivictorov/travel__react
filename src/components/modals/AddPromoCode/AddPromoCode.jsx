import './AddPromoCode.scss';

const AddPromoCode = ({text}) => {

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
                    <div className="project-nav-modal__title">
                        {text}
                    </div>

                    <Button
                        text="Add card"
                        action={() => {
                            addCard(cardNumber);
                            closeModal();
                            setCardNumber('');
                        }}
                    />
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
        </>
    );
}

export default AddPromoCode;