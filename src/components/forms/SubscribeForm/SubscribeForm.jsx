import './SubscribeForm.scss'
import { useState, useEffect } from 'react';
import Button from '../../elements/Button/Button';
import DefaultModal from './../../modals/DefaultModal/DefaultModal';
import Input from './../../elements/Input/Input';
import { checkEmail } from '../../../utils/validationFunctions';
import mailboxImg from './../../../img/footer/mailbox.svg'

const SubscribeForm = () => {
    const [openModal, setOpenModal] = useState(false);

    const [email, setEmail] = useState('');
    const [emailCheckOn, setEmailCheckOn] = useState(false);
    const [emailCheckMsg, setEmailCheckMsg] = useState('');

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
                            onChangeFunction={(event) => setEmail(event.target.value)}
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
                        <DefaultModal
                            isOpen={openModal}
                            onClose={() => setOpenModal(false)}
                            title="Subscribe"
                            text="Thank you! Your e-mail address has been successfully subscribed to our newsletter!"
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