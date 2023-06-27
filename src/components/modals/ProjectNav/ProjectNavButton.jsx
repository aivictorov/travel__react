import './ProjectNavButton.scss'
import { useState } from 'react';
import Modal from './../Modal/Modal';
import ModalWindow from './../ModalWindow/ModalWindow';
import ProjectNavModal from './ProjectNavModal';

const ProjectNavButton = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="project-nav">

            <button
                className="project-nav-button"
                onClick={() => setOpenModal(true)}
            >
                Навигация по проекту
            </button>

            <Modal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                window={<ModalWindow content={<ProjectNavModal />} />}
            />

        </div>
    );
}

export default ProjectNavButton;