import Button from './../../elements/Button/Button';
import { useContext, useState } from 'react';
import { AppContext } from './../../../App';
import './AccountTabsMain.scss';
import { useRef } from 'react';

const AccountTabsMain = () => {
    const { user, setUser } = useContext(AppContext);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    // const [password, setPassword] = useState(user.password);
    // const [phone, setPhone] = useState(user.phone);
    // const [adress, setAdress] = useState(user.adress);
    // const [birthday, setBirthday] = useState(user.birthday);

    const [edit, setEdit] = useState('');

    const items = [
        {
            name: 'name',
            title: 'Name',
            value: name,
            setValue: setName,
            acceptChanges: () => { setUser({ ...user, name: name }) },
            cancelChanges: () => { setName(user.name) },
        },
        {
            name: 'email',
            title: 'Email',
            value: email,
            setValue: setEmail,
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
            {/* {JSON.stringify(user)} */}
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
                                        user[item.name]
                                    }
                                    {edit === item.name &&
                                        <input
                                            type="text"
                                            value={item.value}
                                            onChange={(event) => item.setValue(event.target.value)}
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
                                                setEdit(item.name);
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
                                                    item.acceptChanges();
                                                    setEdit('')
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
                                                    setEdit('')
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