import './ModalWindow.scss';

const ModalWindow = ({ content }) => {

    return (
        <div
            className="project-nav-modal__content"
            onClick={(event) => {
                event.stopPropagation()
            }}
        >
            <div className="project-nav-modal__title">Структура проекта</div>
            {content}
        </div>
    );
}

export default ModalWindow;