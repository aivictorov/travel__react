import './SubscribeForm.scss'
import mailboxImg from './../../../img/footer/mailbox.svg'
import Button from '../../elements/Button/Button';
import { useState } from 'react';
import Subscribe from './../../modals/Subscribe/Subscribe';
import Modal from './../../modals/Modal/Modal';
import ModalWindow from './../../modals/ModalWindow/ModalWindow';

const SubscribeForm = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <form className="subscribe-form">
            <div className="subscribe-form__content">
                <div className="subscribe-form__title">Subscribe Newsletter</div>
                <div className="subscribe-form__subtitle">The Travel</div>
                <div className="subscribe-form__text">
                    Get inspired! Receive travel discounts, tips and behind the scenes
                    stories.
                </div>
                <div className="subscribe-form__row">
                    <input
                        className="subscribe-form__input"
                        type="text"
                        placeholder="Your email address"
                    />
                    <div className="subscribe-form__button-wrapper">
                        <Button
                            text="Subscribe"
                            style="dark bold h100"
                            action={() => { setOpenModal(true) }}
                        />
                        <Modal
                            isOpen={openModal}
                            onClose={() => setOpenModal(false)}
                            window={<ModalWindow content={<Subscribe />} />}
                        />
                    </div>
                </div>
            </div>
            <div className="subscribe-form__image">
                <img src={mailboxImg} alt="mailbox" />
            </div>
        </form>
    );
}

export default SubscribeForm;