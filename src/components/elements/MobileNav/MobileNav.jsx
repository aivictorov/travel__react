import './MobileNav.scss';
import ReactDOM from "react-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "./../../../App";

const MobileNav = ({ classes, isOpen, onClose, content }) => {

    const { setNoScroll } = useContext(AppContext);

    useEffect(() => {
        isOpen ? setNoScroll(true) : setNoScroll(false);
    }, [isOpen]);

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
            className={`mobile-nav${classes === 'main' ? " mobile-nav--main" : ""}`}
        >
            <div
                className="mobile-nav-window"
                onMouseDown={(event) => {
                    event.stopPropagation()
                }}
            >
                {content}
            </div>
            <div className="mobile-nav__close-button" onClick={onClose}>
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
        </div>,
        document.body
    );
}

export default MobileNav;