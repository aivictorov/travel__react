const AccountTabsMain = () => {
    return (
        <div
            className="account-tabs__content"
            tab-content="account"
            tab-group="account"
        >
            <h2 className="account-tabs__content-title">Account</h2>
            <ul className="account-info">
                <li className="account-info__item">
                    <div className="account-info__item-left">
                        <div className="account-info__item-name">Name</div>
                        <div className="account-info__item-value">John Doe</div>
                    </div>
                    <div className="account-info__item-right">
                        <button
                            className="button button--border"
                            type="button"
                            style={{ width: 140 }}
                        >
                            <div className="button__icon">
                                <svg width={16} height={16}>
                                    <use href="#edit-icon" />
                                </svg>
                            </div>
                            Change
                        </button>
                    </div>
                </li>
                <li className="account-info__item">
                    <div className="account-info__item-left">
                        <div className="account-info__item-name">Email</div>
                        <div className="account-info__item-value">
                            John.doe@gmail.com
                        </div>
                    </div>
                    <div className="account-info__item-right">
                        <button className="button button--border" type="button">
                            <div className="button__icon">
                                <svg width={16} height={16}>
                                    <use href="#add-circle-icon" />
                                </svg>
                            </div>
                            Add another email
                        </button>
                        <button
                            className="button button--border"
                            type="button"
                            style={{ width: 140 }}
                        >
                            <div className="button__icon">
                                <svg width={16} height={16}>
                                    <use href="#edit-icon" />
                                </svg>
                            </div>
                            Change
                        </button>
                    </div>
                </li>
                <li className="account-info__item">
                    <div className="account-info__item-left">
                        <div className="account-info__item-name">Password</div>
                        <div className="account-info__item-value">************</div>
                    </div>
                    <div className="account-info__item-right">
                        <button
                            className="button button--border"
                            type="button"
                            style={{ width: 140 }}
                        >
                            <div className="button__icon">
                                <svg width={16} height={16}>
                                    <use href="#edit-icon" />
                                </svg>
                            </div>
                            Change
                        </button>
                    </div>
                </li>
                <li className="account-info__item">
                    <div className="account-info__item-left">
                        <div className="account-info__item-name">Phone number</div>
                        <div className="account-info__item-value">+1 000-000-0000</div>
                    </div>
                    <div className="account-info__item-right">
                        <button
                            className="button button--border"
                            type="button"
                            style={{ width: 140 }}
                        >
                            <div className="button__icon">
                                <svg width={16} height={16}>
                                    <use href="#edit-icon" />
                                </svg>
                            </div>
                            Change
                        </button>
                    </div>
                </li>
                <li className="account-info__item">
                    <div className="account-info__item-left">
                        <div className="account-info__item-name">Address</div>
                        <div className="account-info__item-value">
                            St 32 main downtown, Los Angeles, California, USA
                        </div>
                    </div>
                    <div className="account-info__item-right">
                        <button
                            className="button button--border"
                            type="button"
                            style={{ width: 140 }}
                        >
                            <div className="button__icon">
                                <svg width={16} height={16}>
                                    <use href="#edit-icon" />
                                </svg>
                            </div>
                            Change
                        </button>
                    </div>
                </li>
                <li className="account-info__item">
                    <div className="account-info__item-left">
                        <div className="account-info__item-name">Date of birth</div>
                        <div className="account-info__item-value">01-01-1992</div>
                    </div>
                    <div className="account-info__item-right">
                        <button
                            className="button button--border"
                            type="button"
                            style={{ width: 140 }}
                        >
                            <div className="button__icon">
                                <svg width={16} height={16}>
                                    <use href="#edit-icon" />
                                </svg>
                            </div>
                            Change
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default AccountTabsMain;