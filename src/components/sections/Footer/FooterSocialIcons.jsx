import './FooterSocialIcons.scss';

import facebookIcon from './../../../img/icons/social/facebook.svg';
import instagramIcon from './../../../img/icons/social/instagram.svg';
import twitterIcon from './../../../img/icons/social/twitter.svg';
import youtubeIcon from './../../../img/icons/social/youtube.svg';

const FooterSocialIcons = () => {
    return (
        <div className="social-icons">
            <a className="social-icons__item" href="#!">
                <img
                    src={facebookIcon}
                    alt="facebook"
                    width={20}
                />
            </a>
            <a className="social-icons__item" href="#!">
                <img
                    src={instagramIcon}
                    alt="instagram"
                    width={20}
                />
            </a>
            <a className="social-icons__item" href="#!">
                <img
                    src={twitterIcon}
                    alt="twitter"
                    width={20}
                />
            </a>
            <a className="social-icons__item" href="#!">
                <img
                    src={youtubeIcon}
                    alt="youtube"
                    width={20}
                />
            </a>
        </div>
    );
}

export default FooterSocialIcons;