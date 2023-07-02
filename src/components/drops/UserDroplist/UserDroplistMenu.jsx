import UserDroplistMenuItem from "./UserDroplistMenuItem";

const UserDroplistMenu = ({ data }) => {
    return (
        <ul className="user-droplist__menu">
            {data.map((item, index) => {
                return (
                    <UserDroplistMenuItem
                        key={index}
                        item={item}
                    />
                )
            })}
        </ul>
    );
};

export default UserDroplistMenu;