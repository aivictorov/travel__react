import './Subscribe.scss';
import Button from './../../elements/Button/Button';

const Subscribe = ({ email, onClose }) => {
    return (
        <div className="subscribe-modal">
            <h2 className='subscribe-modal__title'>
                Subscribe
            </h2>
            <div className="subscribe-modal__text">
                Thank you! Your e-mail address <a className="subscribe-modal__link" href={`mailto:${email}`}>{email}</a> has been successfully subscribed to our newsletter!
            </div>
            <Button
                text="OK"
                style="dark w100"
                action={onClose}
            />
        </div>
    );
}

export default Subscribe;