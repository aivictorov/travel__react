import { NavLink } from "react-router-dom";

const HeaderNavLogin = ({ btnStyle }) => {
    return (
        <div className="header-nav__right">
            <NavLink className="header-nav__item" to="/login">
                Login
            </NavLink>
            <NavLink
                className={`button button--bold button--${btnStyle}`}
                style={{ width: 104 }}
                to="/sign-up"
            >
                Sign Up
            </NavLink>
        </div>
    );
};

export default HeaderNavLogin;