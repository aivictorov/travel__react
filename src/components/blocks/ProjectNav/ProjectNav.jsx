import './ProjectNav.scss'
import { NavLink } from 'react-router-dom';

const ProjectNav = () => {

    return (
        <div className="project-nav">
            <button className="project-nav-button" modal-button="project-nav">
                <span>Навигация по проекту</span>
            </button>
            <div className="project-nav-modal" modal-window="project-nav">
                <div className="project-nav-modal__content" modal-content="project-nav">
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
                        * - авторизованный пользователь
                    </div>
                </div>
                <div className="project-nav-modal__close-button">
                    <svg
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            stroke="none"
                            strokeWidth={2}
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="square"
                        >
                            <g transform="translate(1.000000, 1.000000)" stroke="#ffffff">
                                <path d="M0,11 L22,11" />
                                <path d="M11,0 L11,22" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ProjectNav;