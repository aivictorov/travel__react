import UserMenuListItem from "./UserMenuListItem";

const UserMenuList = ({ data }) => {
    return (
        <ul className="user-menu-list">
            {data.map((item, index) => {
                return (
                    <UserMenuListItem
                        key={index}
                        item={item}
                    />
                )
            })}
        </ul>
    );
};

export default UserMenuList;