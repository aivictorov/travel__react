import './Footer.scss'
import Logo from '../../blocks/Logo/Logo';
import FooterSubscribeForm from './FooterSubscribeForm';
import FooterSocialIcons from './FooterSocialIcons';

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
                            <div className="footer__column">
                                <div className="footer-nav__title">Our Destinations</div>
                                <ul className="footer-nav__list">
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Canada
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Alaska
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            France
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Iceland
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <div className="footer-nav__title">Our Activities</div>
                                <ul className="footer-nav__list">
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Northern Lights
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Cruising &amp; sailing
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Multi-activities
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Kayaing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <div className="footer-nav__title">Travel Blogs</div>
                                <ul className="footer-nav__list">
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Bali Travel Guide
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Sri Lanks Travel Guide
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Peru Travel Guide
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">

                                        <a className="footer-nav__link" href="#!">
                                            Bali Travel Guide
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <div className="footer-nav__title">About Us</div>
                                <ul className="footer-nav__list">
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Our Story
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Work with us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <div className="footer-nav__title">Contact Us</div>
                                <ul className="footer-nav__list">
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Our Story
                                        </a>
                                    </li>
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href="#!">
                                            Work with us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__form-wrapper">
                <div className="container">
                    <FooterSubscribeForm />
                </div>
            </div>
        </footer>
    );
}

export default Footer;