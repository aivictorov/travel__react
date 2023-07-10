import './AccountTabsMain.scss';
import { useContext, useState } from 'react';
import { AppContext } from './../../../App';
import Button from './../../elements/Button/Button';

const AccountTabsMain = () => {
    const { user, setUser } = useContext(AppContext);
    const [userData, setUserData] = useState(user.account);
    const [edit, setEdit] = useState('');

    const items = [
        { name: 'name', title: 'Name' },
        { name: 'email', title: 'Email' },
        { name: 'password', title: 'Password' },
        { name: 'phone', title: 'Phone number' },
        { name: 'address', title: 'Address' },
        { name: 'birthday', title: 'Date of birth' },
    ];

    function startEdit(itemName) {
        setUserData(user.account);
        setEdit(itemName);
    }

    function acceptChanges() {
        setUser({ ...user, account: userData });
        setEdit('');
    };

    function cancelChanges() {
        setUserData(user.account);
        setEdit('');
    };

    return (
        <div className="account-tabs__content">
            <h2 className="account-tabs__content-title">Account</h2>
            <ul className="account-info">
                {items.map((item, index) => {
                    return (
                        <li
                            className="account-info__item"
                            key={index}
                        >
                            <div className="account-info__item-left">
                                <div className="account-info__item-title">
                                    {item.title}
                                </div>
                                <div className="account-info__item-value">
                                    {edit !== item.name &&
                                        userData[item.name]
                                    }
                                    {edit === item.name &&
                                        <input
                                            type="text"
                                            value={userData[item.name]}
                                            // onChange={item.setValue}
                                            onChange={(event) => { setUserData({ ...userData, [item.name]: event.target.value }) }}
                                            autoFocus
                                        />
                                    }
                                </div>
                            </div>
                            <div className="account-info__item-right">
                                {/* {item.name === 'Email' &&
                                    <Button
                                        text="Add another email"
                                        style="border"
                                        svgID="add-circle-icon"
                                    />
                                } */}
                                {edit !== item.name &&
                                    <div className="account-info__button-wrapper">
                                        <Button
                                            text="Change"
                                            style="border w100"
                                            svgID="edit-icon"
                                            action={() => {
                                                startEdit(item.name);
                                            }}
                                        />
                                    </div>
                                }
                                {edit === item.name &&
                                    <>
                                        <div className="account-info__button-wrapper">
                                            <Button
                                                text="Save"
                                                style="border w100"
                                                svgID="upload-icon"
                                                action={() => {
                                                    acceptChanges();
                                                }}
                                            />
                                        </div>
                                        <div className="account-info__button-wrapper">
                                            <Button
                                                text="Cancel"
                                                style="border w100"
                                                svgID="upload-icon"
                                                action={() => {
                                                    cancelChanges();
                                                }}
                                            />
                                        </div>
                                    </>
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default AccountTabsMain;

