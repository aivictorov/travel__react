import './Footer.scss'
import Logo from '../../blocks/Logo/Logo';
import FooterSocialIcons from './FooterSocialIcons';
import FooterNav from './FooterNav';
import SubscribeForm from './../../forms/SubscribeForm/SubscribeForm';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__background">
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__left">
                            <Logo
                                mainColor="#000"
                                accentColor="#FFF"
                            />
                            <div className="footer__social-icons">
                                <FooterSocialIcons />
                            </div>
                        </div>
                        <div className="footer__right">
                            <FooterNav />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__form-wrapper">
                <div className="container">
                    <SubscribeForm />
                </div>
            </div>
        </footer>
    );
}

export default Footer;