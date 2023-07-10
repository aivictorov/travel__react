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
                <div className="modal__close-button">
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
                            <g transform="translate(1.000000, 1.000000)" stroke="#ffffff">
                                <path d="M0,11 L22,11" />
                                <path d="M11,0 L11,22" />
                            </g>
                        </g>
                    </svg>
                </div>

            </div>,
            document.body
        );
    }

export default Modal;