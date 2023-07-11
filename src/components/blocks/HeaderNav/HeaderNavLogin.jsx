import { NavLink, useNavigate } from "react-router-dom";
import Button from './../../elements/Button/Button';

const HeaderNavLogin = ({ btnStyle }) => {
    const navigate = useNavigate();

    return (
        <div className="header-nav__right">
            <NavLink className="header-nav__item" to="/login">
                Login
            </NavLink>

            <div className="header-nav__button-wrapper">
                <Button text="Sign Up" classes={`${btnStyle} bold w100`} action={() => { navigate('/sign-up') }} />
            </div>
        </div>
    );
};

export default HeaderNavLogin;