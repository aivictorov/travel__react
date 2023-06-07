import './AccountCover.scss';
import coverImg from "./../../../img/users/cover.jpg";
import avatarImg from "./../../../img/users/avatars/01.jpg";

const AccountCover = () => {
    return (
        <section className="account-cover">
            <div className="container">
                <div className="account-cover__background">
                    <img src={coverImg} alt="account-cover" />
                    <div className="account-cover__upload-button">
                        <button className="button" type="button">
                            <div className="button__icon">
                                <svg width={16} height={16}>
                                    <use href="#upload-icon" />
                                </svg>
                            </div>
                            Upload new cover
                        </button>
                    </div>
                </div>
                <div className="account-cover__user">
                    <div className="account-cover__user-avatar">
                        <div className="account-cover__user-avatar-image">
                            <img src={avatarImg} alt="user-avatar" />
                        </div>
                        <button
                            className="account-cover__user-avatar-edit-button"
                            type="button"
                        >
                            <svg width={24} height={24}>
                                <use href="#pen-icon" />
                            </svg>
                        </button>
                    </div>
                    <div className="account-cover__user-name">John Doe</div>
                    <div className="account-cover__user-email">john.doe@gmail.com</div>
                </div>
            </div>
        </section>
    );
}

export default AccountCover;