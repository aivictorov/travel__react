import Button from './../../elements/Button/Button';
import { useContext, useState } from 'react';
import { AppContext } from './../../../App';
import users from './../../../data/users';
import './AccountTabsMain.scss';
import { useRef } from 'react';

const AccountTabsMain = () => {

    const { userID } = useContext(AppContext);

    const user = users.find((user) => {
        return user.id === userID;
    })

    const defaultValues = {
        name: user.name,
        email: user.email,
        password: '********',
        phone: user.phoneNumber,
        adress: user.address,
        birthday: user.birthday,
    };

    // const inputNameRef = useRef();

    const [name, setName] = useState(defaultValues.name);
    const [editName, setEditName] = useState(false);

    const [email, setEmail] = useState(defaultValues.email);
    const [editEmail, setEditEmail] = useState(false);

    const [password, setPassword] = useState(defaultValues.password);
    const [editPassword, setEditPassword] = useState(false);

    const [phone, setPhone] = useState(defaultValues.phone);
    const [editPhone, setEditPhone] = useState(false);

    const [adress, setAdress] = useState(defaultValues.adress);
    const [editAdress, setEditAdress] = useState(false);

    const [birthday, setBirthday] = useState(defaultValues.birthday);
    const [editBirthday, setEditBirthday] = useState(false);

    const items = [
        { name: 'Name', value: name, setValue: setName, edit: editName, setEditValue: setEditName },
        { name: 'Email', value: email, setValue: setEmail, edit: editEmail, setEditValue: setEditEmail },
        { name: 'Password', value: password, setValue: setPassword, edit: editPassword, setEditValue: setEditPassword },
        { name: 'Phone number', value: phone, setValue: setPhone, edit: editPhone, setEditValue: setEditPhone },
        { name: 'Adress', value: adress, setValue: setAdress, edit: editAdress, setEditValue: setEditAdress },
        { name: 'Date of birth', value: birthday, setValue: setBirthday, edit: editBirthday, setEditValue: setEditBirthday },
    ];

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
                                <div className="account-info__item-name">
                                    {item.name}
                                </div>
                                <div className="account-info__item-value">
                                    {!item.edit &&
                                        item.value
                                    }
                                    {item.edit &&
                                        <input
                                            type="text"
                                            value={item.value}
                                            onChange={(event) => {
                                                item.setValue(event.target.value);
                                            }}
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
                                <div className="account-info__change-button-wrapper">
                                    {!item.edit &&
                                        <Button
                                            text="Change"
                                            style="border w100"
                                            svgID="edit-icon"
                                            action={() => { item.setEditValue(true) }}
                                        />
                                    }
                                    {item.edit &&
                                        <Button
                                            text="Save"
                                            style="border w100"
                                            svgID="upload-icon"
                                            action={() => { item.setEditValue(false) }}
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