import './MobileNavIcon.scss';
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import MobileNav from './MobileNav';
import UserMenu from './../../drops/UserMenu/UserMenu';
import { AppContext } from '../../../App';

const MobileNavIcon = () => {
    const { userAuth, openMobileNav, setOpenMobileNav } = useContext(AppContext);

    return (
        <>
            <div
                className={`mobile-nav-icon${openMobileNav ? " mobile-nav-icon--active" : ""}`}
                onMouseDown={(event) => {
                    event.stopPropagation();
                    setOpenMobileNav(!openMobileNav);
                }}
            >
                <div className="mobile-nav-icon__middle"></div>
            </div>

            {!userAuth &&
                <MobileNav
                    isOpen={openMobileNav}
                    onClose={() => setOpenMobileNav(false)}
                    content={
                        <div className="mobile-nav-links">
                            <NavLink to='/flight-search' onClick={() => setOpenMobileNav(false)}>
                                Find flights
                            </NavLink>
                            <br />
                            <br />
                            <NavLink to='/hotel-search' onClick={() => setOpenMobileNav(false)}>
                                Find stay
                            </NavLink>
                            <br />
                            <br />
                            <br />
                            <NavLink to="/login" onClick={() => setOpenMobileNav(false)}>
                                Login
                            </NavLink>
                            <br />
                            <br />
                            <NavLink to="/sign-up" onClick={() => setOpenMobileNav(false)}>
                                Sign Up
                            </NavLink>
                        </div>
                    }
                />
            }

            {userAuth &&
                <MobileNav
                    isOpen={openMobileNav}
                    onClose={() => setOpenMobileNav(false)}
                    content={<UserMenu />}
                />
            }

        </>
    );
}

export default MobileNavIcon;