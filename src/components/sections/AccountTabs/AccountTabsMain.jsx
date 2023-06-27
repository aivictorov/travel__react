import Button from './../../elements/Button/Button';

const AccountTabsMain = () => {

    const items = [
        { name: 'Name', value: 'John Doe' },
        { name: 'Email', value: 'John.doe@gmail.com' },
        { name: 'Password', value: '************' },
        { name: 'Phone number', value: '+1 000-000-0000' },
        { name: 'Address', value: 'St 32 main downtown, Los Angeles, California, USA' },
        { name: 'Date of birth', value: '01-01-1992' },
    ];

    let change = false;
    // change = true;

    return (
        <div
            className="account-tabs__content"
            tab-content="account"
            tab-group="account"
        >
            <h2 className="account-tabs__content-title">Account</h2>
            <ul className="account-info">
                {items.map((item) => {
                    return (
                        <li
                            className="account-info__item"
                            key={item.name}
                        >
                            <div className="account-info__item-left">
                                <div className="account-info__item-name">{item.name}</div>
                                <div className="account-info__item-value">
                                    {!change &&
                                        item.value
                                    }
                                    {change &&
                                        <input
                                            // className="account-info__item-value"
                                            type="text"
                                            defaultValue="John Doe"
                                        />
                                    }
                                </div>
                            </div>
                            <div className="account-info__item-right">
                                {item.name === 'Email' &&
                                    <Button
                                        text="Add another email"
                                        style="border"
                                        svgID="add-circle-icon"
                                    />
                                }
                                <div className="account-info__change-button-wrapper">
                                    {!change &&
                                        <Button
                                            text="Change"
                                            style="border w100"
                                            svgID="edit-icon"
                                        />
                                    }
                                    {change &&
                                        <Button
                                            text="Save"
                                            style="border w100"
                                            svgID="upload-icon"
                                        />
                                    }
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default AccountTabsMain;