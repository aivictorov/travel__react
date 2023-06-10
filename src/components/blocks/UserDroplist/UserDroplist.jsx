import { useContext } from "react";
import { AppContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import userAvatar from './../../../img/users/avatars/01.jpg'

const UserDroplist = () => {
    const { setUserAuth } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="user-droplist" dropdown="user">
            <div className="user-droplist__header">
                <div className="user-droplist__avatar">
                    <img src={userAvatar} alt="user-avatar" />
                </div>
                <div className="user-droplist__user">
                    <div className="user-droplist__user-name">John Doe</div>
                    <div className="user-droplist__user-status">Online</div>
                </div>
            </div>
            <ul className="user-droplist__menu">
                <li>
                    <a className="user-droplist__menu-item" href="#!">
                        <div className="user-droplist__menu-item-icon">
                            <img src="./img/icons/user-dropdown/user.svg" alt="icon" />
                        </div>
                        <div className="user-droplist__menu-item-text">My account</div>
                        <div className="user-droplist__menu-item-arrow">
                            <svg width={16} height={16}>
                                <use href="#arrow-right" />
                            </svg>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="user-droplist__menu-item" href="#!">
                        <div className="user-droplist__menu-item-icon">
                            <img src="./img/icons/user-dropdown/card.svg" alt="icon" />
                        </div>
                        <div className="user-droplist__menu-item-text">Payments</div>
                        <div className="user-droplist__menu-item-arrow">
                            <svg width={16} height={16}>
                                <use href="#arrow-right" />
                            </svg>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="user-droplist__menu-item" href="#!">
                        <div className="user-droplist__menu-item-icon">
                            <img src="./img/icons/user-dropdown/settings.svg" alt="icon" />
                        </div>
                        <div className="user-droplist__menu-item-text">Settings</div>
                        <div className="user-droplist__menu-item-arrow">
                            <svg width={16} height={16}>
                                <use href="#arrow-right" />
                            </svg>
                        </div>
                    </a>
                </li>
            </ul>
            <ul className="user-droplist__menu">
                <li>
                    <a className="user-droplist__menu-item" href="#!">
                        <div className="user-droplist__menu-item-icon">
                            <img src="./img/icons/user-dropdown/support.svg" alt="icon" />
                        </div>
                        <div className="user-droplist__menu-item-text">Support</div>
                        <div className="user-droplist__menu-item-arrow">
                            <svg width={16} height={16}>
                                <use href="#arrow-right" />
                            </svg>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="user-droplist__menu-item" href="#!">
                        <div className="user-droplist__menu-item-icon">
                            <img src="./img/icons/user-dropdown/logout.svg" alt="icon" />
                        </div>
                        <div className="user-droplist__menu-item-text">Logout</div>
                        <div className="user-droplist__menu-item-arrow">
                            <svg width={16} height={16}>
                                <use href="#arrow-right" />
                            </svg>
                        </div>
                    </a>
                </li>
                <li>
                    <button
                        className="user-droplist__menu-item-text"
                        type="button"
                        onClick={() => {
                            setUserAuth(false);
                            navigate("/account");
                        }}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default UserDroplist;