import './ModalWindow.scss';

const ModalWindow = ({ content }) => {

    return (
        <div
            className="modal-window"
            onClick={(event) => {
                event.stopPropagation()
            }}
        >
            <div className="modal-window__title">
                Структура проекта
            </div>
            {content}
        </div>
    );
}

export default ModalWindow;