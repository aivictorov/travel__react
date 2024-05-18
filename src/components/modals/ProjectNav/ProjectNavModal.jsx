import './ProjectNavModal.scss';
import { NavLink } from 'react-router-dom';

const ProjectNavModal = () => {
    return (
        <>
            <div className="project-nav-modal__title">Структура проекта</div>
            <ul className="project-nav-modal__list">
                <li>
                    <div className="project-nav-modal__list-title">Main page</div>
                    <NavLink href="./">Main</NavLink>
                </li>
                <li>
                    <div className="project-nav-modal__list-title">User account</div>
                    <NavLink to="./account">User account*</NavLink>
                </li>
                <li>
                    <div className="project-nav-modal__list-title">Flights</div>
                    <NavLink to="./flight-search">Flight search</NavLink>
                    <NavLink to="./flight-listing">Flight listing</NavLink>
                    <NavLink to="./flight-details">Flight details</NavLink>
                    <NavLink to="./flight-booking">Flight booking</NavLink>
                </li>
                <li>
                    <div className="project-nav-modal__list-title">Hotels</div>
                    <NavLink to="./hotel-search">Hotel search</NavLink>
                    <NavLink to="./hotel-listing">Hotel listing</NavLink>
                    <NavLink to="./hotel-details">Hotel details</NavLink>
                    <NavLink to="./hotel-booking">Hotel booking</NavLink>
                </li>
                <li>
                    <div className="project-nav-modal__list-title">Login & Sign-Up</div>
                    <NavLink to="./login">Login</NavLink>
                    <NavLink to="./sign-up">Sign Up</NavLink>
                    <NavLink to="./set-password">Set Password</NavLink>
                    <NavLink to="./reset-password">Reset Password</NavLink>
                    <NavLink to="./verify-code">Verify Code</NavLink>
                </li>
            </ul>
            <div className="project-nav-modal__notice">
                * - authorized user (use email: 'john.doe@gmail.com' and password: '123')
            </div>
        </>
    );
}

export default ProjectNavModal;