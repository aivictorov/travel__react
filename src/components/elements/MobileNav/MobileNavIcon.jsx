import './MobileNavIcon.scss';
import { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import MobileNav from './MobileNav';
import Drop from './../../drops/Drop/Drop';
import UserMenu from './../../drops/UserMenu/UserMenu';
import { AppContext } from '../../../App';

const MobileNavIcon = ({ classes }) => {
    const { userAuth, setNoScroll } = useContext(AppContext);
    const [openDropMenu, setOpenDropMenu] = useState(false);
    const [openMobileNav, setOpenMobileNav] = useState(false);

    return (
        <>
            <div
                className={`mobile-nav-icon${openMobileNav ? " mobile-nav-icon--active" : ""}`}
                onMouseDown={(event) => {
                    event.stopPropagation();
                    if (!userAuth) {
                        setOpenMobileNav(!openMobileNav);
                        window.scrollTo(0, 0);
                    };
                    if (userAuth) setOpenDropMenu(!openDropMenu);

                }}
            >
                <div className="mobile-nav-icon__middle"></div>

                <Drop
                    name="menu"
                    classes="menu"
                    isOpen={openDropMenu}
                    onClose={() => setOpenDropMenu(false)}
                    content={<UserMenu />}
                />
            </div>

            <MobileNav
                classes={classes}
                isOpen={openMobileNav}
                onClose={() => setOpenMobileNav(false)}
                content={
                    <div className="mobile-nav-links">
                        <NavLink to='/flight-search'
                            onClick={
                                () => {
                                    setOpenMobileNav(false);
                                    setNoScroll(false);
                                }
                            }>
                            Find flights
                        </NavLink>
                        <NavLink to='/hotel-search' onClick={
                            () => {
                                setOpenMobileNav(false);
                                setNoScroll(false);
                            }
                        }>
                            Find stays
                        </NavLink>
                        <div></div>
                        <NavLink to="/login" onClick={
                            () => {
                                setOpenMobileNav(false);
                                setNoScroll(false);
                            }
                        }>
                            Login
                        </NavLink>
                        <NavLink to="/sign-up" onClick={
                            () => {
                                setOpenMobileNav(false);
                                setNoScroll(false);
                            }
                        }>
                            Sign Up
                        </NavLink>
                    </div>
                }
            />
        </>
    );
}

export default MobileNavIcon;