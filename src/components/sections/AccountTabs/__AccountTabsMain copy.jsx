import Button from '../../elements/Button/Button';
import { useContext, useState } from 'react';
import { AppContext } from '../../../App';
import './AccountTabsMain.scss';

const AccountTabsMain = () => {
    const { user, setUser } = useContext(AppContext);

    const [name, setName] = useState(user.name);
    const [editName, setEditName] = useState(false);

    const [email, setEmail] = useState(user.email);
    const [editEmail, setEditEmail] = useState(false);

    // const [password, setPassword] = useState(user.password);
    // const [editPassword, setEditPassword] = useState(false);

    // const [phone, setPhone] = useState(user.phone);
    // const [editPhone, setEditPhone] = useState(false);

    // const [adress, setAdress] = useState(user.adress);
    // const [editAdress, setEditAdress] = useState(false);

    // const [birthday, setBirthday] = useState(user.birthday);
    // const [editBirthday, setEditBirthday] = useState(false);

    

    const items = [
        {
            title: 'Name',
            value: name,
            setValue: setName,
            edit: editName,
            setEditValue: setEditName,
            acceptChanges: () => { setUser({ ...user, name: name }) },
            cancelChanges: () => { setName(user.name) },
        },
        {
            title: 'Email',
            value: email,
            setValue: setEmail,
            edit: editEmail,
            setEditValue: setEditEmail,
            acceptChanges: () => { setUser({ ...user, email: email }) },
            cancelChanges: () => { setEmail(user.email) },
        },





        // { title: 'Password', value: password, setValue: setPassword, edit: editPassword, setEditValue: setEditPassword },
        // { title: 'Phone number', value: phone, setValue: setPhone, edit: editPhone, setEditValue: setEditPhone },
        // { title: 'Adress', value: adress, setValue: setAdress, edit: editAdress, setEditValue: setEditAdress },
        // { title: 'Date of birth', value: birthday, setValue: setBirthday, edit: editBirthday, setEditValue: setEditBirthday },
    ];

    return (
        <div className="account-tabs__content">
            {JSON.stringify(user)}
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
                                    {!item.edit &&
                                        item.value
                                    }
                                    {item.edit &&
                                        <input
                                            type="text"
                                            value={item.value}
                                            onChange={(event) => item.setValue(event.target.value)}
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
                                {!item.edit &&
                                    <div className="account-info__button-wrapper">
                                        <Button
                                            text="Change"
                                            style="border w100"
                                            svgID="edit-icon"
                                            action={() => { item.setEditValue(true) }}
                                        />
                                    </div>
                                }
                                {item.edit &&
                                    <>
                                        <div className="account-info__button-wrapper">
                                            <Button
                                                text="Save"
                                                style="border w100"
                                                svgID="upload-icon"
                                                action={() => {
                                                    item.acceptChanges();
                                                    item.setEditValue(false)
                                                }}
                                            />
                                        </div>
                                        <div className="account-info__button-wrapper">
                                            <Button
                                                text="Cancel"
                                                style="border w100"
                                                svgID="upload-icon"
                                                action={() => {
                                                    item.cancelChanges();
                                                    item.setEditValue(false)
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