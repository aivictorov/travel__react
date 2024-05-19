import './MobileNavIcon.scss';
import { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import Modal from './../../modals/Modal/Modal';
import ModalWindow from './../../modals/ModalWindow/ModalWindow';
import UserMenu from './../../drops/UserMenu/UserMenu';
import { AppContext } from '../../../App';

const MobileNavIcon = () => {
    const { userAuth } = useContext(AppContext)
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div
                className="mobile-nav-icon"
                onMouseDown={(event) => {
                    event.stopPropagation();
                    setOpenModal(!openModal);
                }}
            >
                <div className="mobile-nav-icon__middle"></div>
            </div>

            {!userAuth &&
                <Modal
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                    window={<ModalWindow content={
                        <div className="">
                            <NavLink className="" to="/login">
                                Login
                            </NavLink>
                            <br />
                            <br />
                            <NavLink className="" to="/sign-up">
                                Sign Up
                            </NavLink>
                        </div>
                    } />}
                />
            }

            {userAuth &&
                <Modal
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                    window={<ModalWindow content={<UserMenu />} />}
                />
            }



        </>
    );
}

export default MobileNavIcon;