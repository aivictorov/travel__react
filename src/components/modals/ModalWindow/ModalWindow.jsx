import './ModalWindow.scss';

const ModalWindow = ({ content }) => {

    return (
        <div
            className="modal-window"
            onClick={(event) => {
                event.stopPropagation()
            }}
        >
            {content}
        </div>
    );
}

export default ModalWindow;