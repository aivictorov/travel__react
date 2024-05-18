import './DefaultModal.scss';
import Button from '../../elements/Button/Button';
import Modal from './../Modal/Modal';
import ModalWindow from './../ModalWindow/ModalWindow';

const DefaultModal = ({ isOpen, onClose, title, text }) => {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            window={
                <ModalWindow
                    content={
                        <div className="default-modal">
                            <h2 className='default-modal__title'>
                                {title}
                            </h2>
                            <div className="default-modal__text">
                                {text}
                            </div>
                            <div className="default-modal__button-wrapper">
                                <Button
                                    text="OK"
                                    classes="dark w100"
                                    action={onClose}
                                />
                            </div>
                            <div className="modal__close-button" onClick={onClose}>
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        stroke="none"
                                        strokeWidth="2"
                                        fill="none"
                                        fillRule="evenodd"
                                        strokeLinecap="square"
                                    >
                                        <g transform="translate(1.000000, 1.000000)" stroke="#000">
                                            <path d="M0,11 L22,11" />
                                            <path d="M11,0 L11,22" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    }
                />
            }
        />
    );
}

export default DefaultModal;
