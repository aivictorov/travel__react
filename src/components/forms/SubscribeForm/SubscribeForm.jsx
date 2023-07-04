import './SubscribeForm.scss'
import mailboxImg from './../../../img/footer/mailbox.svg'
import Button from '../../elements/Button/Button';
import { useState, useRef, useEffect } from 'react';
import Subscribe from './../../modals/Subscribe/Subscribe';
import Modal from './../../modals/Modal/Modal';
import ModalWindow from './../../modals/ModalWindow/ModalWindow';
import Input from './../../elements/Input/Input';
import { checkEmail } from '../../../utils/validationFunctions';

const SubscribeForm = () => {

    const [openModal, setOpenModal] = useState(false);

    const [email, setEmail] = useState('');
    const [emailCheckOn, setEmailCheckOn] = useState(false);
    const [emailCheckMsg, setEmailCheckMsg] = useState('');

    // function checkEmail() {
    //     let result = false;
    //     const template = /^[A-Z][0-9A-Z._]+@[A-Z]+.[A-Z]{2,}$/i;

    //     if (!email.trim()) {
    //         setEmailCheckMsg('Please, enter email');
    //     } else if (!template.test(email.trim())) {
    //         setEmailCheckMsg('Incorrect format of email');
    //     } else {
    //         setEmailCheckMsg('');
    //         result = true;
    //     };

    //     return result;
    // }

    function validateForm() {
        let result = [];

        if (!checkEmail(email, setEmailCheckMsg)) {
            setEmailCheckOn(true);
            result.push(false);
        } else {
            setEmailCheckOn(false);
        };

        return !result.includes(false);
    };

    useEffect(() => {
        if (emailCheckOn) checkEmail(email, setEmailCheckMsg);
    }, [email])

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
                    <div className="subscribe-form__input-wrapper">
                        <Input
                            type="email"
                            style="subscribe-form"
                            placeholder="Your email address"
                            value={email}
                            onChangeFunction={setEmail}
                            validation={emailCheckOn}
                            message={emailCheckMsg}
                        />
                    </div>
                    <div className="subscribe-form__button-wrapper">
                        <Button
                            text="Subscribe"
                            type="submit"
                            style="dark bold h100"
                            action={(event) => {
                                event.preventDefault();
                                if (validateForm()) {
                                    setOpenModal(true);
                                    setEmailCheckOn(false);
                                } else {
                                    setEmailCheckOn(true);
                                };
                            }}
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