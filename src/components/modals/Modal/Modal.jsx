import './Modal.scss';
import { useEffect } from 'react';
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, window }) => {
    
        useEffect(() => {
            function closeModalByKey(event) {
                if (event.key === 'Escape') onClose();
            };

            document.addEventListener('keydown', closeModalByKey);

            return () => document.removeEventListener('keydown', closeModalByKey);
        }, []);

        if (!isOpen) return null;

        return ReactDOM.createPortal(
            <div
                className="modal"
                onMouseDown={onClose}
            >
                {window}
            </div>,
            document.body
        );
    }

export default Modal;