import './AccountCover.scss';
import coverImg from "./../../../img/users/cover.jpg";
import Button from './../../elements/Button/Button';
import UploadCover from './../../modals/UploadCover/UploadCover';
import Modal from './../../modals/Modal/Modal';
import ModalWindow from './../../modals/ModalWindow/ModalWindow';
import { useState, useContext } from 'react';
import { AppContext } from './../../../App';

const AccountCover = () => {
    const { user } = useContext(AppContext);
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className="account-cover">
            <div className="container">
                <div className="account-cover__background">
                    <img src={coverImg} alt="account-cover" />
                    <div className="account-cover__upload-button">
                        <Button
                            text="Upload new cover"
                            svgID="upload-icon"
                            action={() => setOpenModal(true)}
                        />
                        <Modal
                            isOpen={openModal}
                            onClose={() => setOpenModal(false)}
                            window={<ModalWindow content={
                                <UploadCover onClose={() => setOpenModal(false)} />
                            } />}
                        />
                    </div>
                </div>
                <div className="account-cover__user">
                    <div className="account-cover__user-avatar">
                        <div className="account-cover__user-avatar-image">
                            <img src={user.account.avatar} alt="user-avatar" />
                        </div>
                        <button
                            className="account-cover__user-avatar-edit-button"
                            type="button"
                        >
                            <svg width={24} height={24}><use href="#pen-icon" /></svg>
                        </button>
                    </div>
                    <div className="account-cover__user-name">{user.account.name}</div>
                    <div className="account-cover__user-email">{user.account.email}</div>
                </div>
            </div>
        </section>
    );
}

export default AccountCover;