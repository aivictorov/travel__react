import './AddCardPopup.scss'

const AddCardPopup = () => {

    return (
        <div className="project-nav">
            <div className="project-nav-modal" modal-window="add-card">

                <div className="project-nav-modal__content" modal-content="add-card">
                    <div className="project-nav-modal__title">POPUP</div>
                    <button
                        className="add-card__button"
                        modal-button="add-card"
                        type="button"
                        onClick={() => { console.log('ADD') }}
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
        </div>
    );
}

export default AddCardPopup;