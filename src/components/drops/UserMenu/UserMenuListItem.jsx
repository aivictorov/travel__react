const UserMenuListItem = ({ item }) => {
    return (
        <li>
            <button
                className="user-menu-list__item"
                type="button"
                onClick={item.action}
            >
                <div className="user-menu-list__item-icon">
                    <img src={item.icon} alt="icon" />
                </div>
                <div className="user-menu-list__item-text">{item.title}</div>
                <div className="user-menu-list__item-arrow">
                    <svg width={16} height={16}>
                        <use href="#arrow-right" />
                    </svg>
                </div>
            </button>
        </li>
    );
}

export default UserMenuListItem;