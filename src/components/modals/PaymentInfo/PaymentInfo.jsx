import './PaymentInfo.scss';
import Button from './../../elements/Button/Button';

const PaymentInfo = ({ onClose }) => {
    return (
        <div className='payment-info-modal'>
            <h2 className="payment-info-modal__title">
                Payment information
            </h2>
            <div className="payment-info-modal__text">
                <p>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
                <p>This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.</p>

            </div>
            <div className="payment-info__button-wrapper">
                <Button
                    text="Submit"
                    style="dark w100"
                    action={onClose}
                />
            </div>
        </div>
    );
}

export default PaymentInfo;