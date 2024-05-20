import './MobileNavIcon.scss';
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import MobileNav from './MobileNav';
import UserMenu from './../../drops/UserMenu/UserMenu';
import { AppContext } from '../../../App';

const MobileNavIcon = () => {
    const { userAuth, openMobileNav, setOpenMobileNav } = useContext(AppContext)

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
                        <div className="">
                            <NavLink className="" to="/flight-search">
                                Find flights
                            </NavLink>
                            <br />
                            <br />
                            <NavLink className="" to="/hotel-search">
                                Find stay
                            </NavLink>
                            <br />
                            <br />
                            <br />
                            <NavLink className="" to="/login">
                                Login
                            </NavLink>
                            <br />
                            <br />
                            <NavLink className="" to="/sign-up">
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