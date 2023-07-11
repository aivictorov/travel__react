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
                        </div>
                    }
                />
            }
        />
    );
}

export default DefaultModal;
