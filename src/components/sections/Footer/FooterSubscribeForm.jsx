import './FooterSubscribeForm.scss'
import mailboxImg from './../../../img/footer/mailbox.svg'

const FooterSubscribeForm = () => {
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
                        defaultValue="Your email address"
                    />
                    <button className="subscribe-button" type="button">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="subscribe-form__image">
                <img src={mailboxImg} alt="mailbox" />
            </div>
        </form>
    );
}

export default FooterSubscribeForm;