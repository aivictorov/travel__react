const UserDroplistMenuItem = ({ item }) => {
    return (
        <li>
            <button
                className="user-droplist__menu-item"
                type="button"
                onClick={item.action}
            >
                <div className="user-droplist__menu-item-icon">
                    <img src="./img/icons/user-dropdown/user.svg" alt="icon" />
                </div>
                <div className="user-droplist__menu-item-text">{item.title}</div>
                <div className="user-droplist__menu-item-arrow">
                    <svg width={16} height={16}>
                        <use href="#arrow-right" />
                    </svg>
                </div>
            </button>
        </li>
    );
}

export default UserDroplistMenuItem;