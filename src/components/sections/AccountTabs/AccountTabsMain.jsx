import Button from './../../elements/Button/Button';
import { useContext } from 'react';
import { AppContext } from './../../../App';
import users from './../../../data/users';

const AccountTabsMain = () => {

    const { userID } = useContext(AppContext);

    const user = users.find((user) => {
        return user.id === userID;
    })

    const items = [
        { name: 'Name', value: user.name },
        { name: 'Email', value: user.email },
        { name: 'Password', value: '********' },
        { name: 'Phone number', value: user.phoneNumber },
        { name: 'Address', value: user.address },
        { name: 'Date of birth', value: user.dateOfBirth },
    ];

    let change = false;
    // change = true;

    return (
        <div className="account-tabs__content">
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