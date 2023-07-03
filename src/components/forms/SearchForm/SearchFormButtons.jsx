import './SearchFormButtons.scss';
import Button from "../../elements/Button/Button";
import ModalWindow from './../../modals/ModalWindow/ModalWindow';
import Modal from './../../modals/Modal/Modal';
import AddPromoCodeModal from './../../modals/AddPromoCode/AddPromoCodeModal';
import { useState } from 'react';

const SearchFormButtons = ({ layout, action }) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="search-form__buttons">
            <div className="search-form__add-button-wrapper">
                <Button
                    text='Add Promo Code'
                    style="transparent w100"
                    svgID="add-icon"
                    action={() => setOpenModal(true)}
                />
            </div>

            <Modal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                window={<ModalWindow content={<AddPromoCodeModal />} />}
            />

            {layout === 'flights' &&
                <Button
                    type="submit"
                    text='Show Filghts'
                    svgID='send-icon'
                    action={action}
                />
            }

            {layout === 'hotels' &&
                <Button
                    type="submit"
                    text='Show Places'
                    svgID='building-icon'
                    action={action}
                />
            }
        </div>
    );
};

export default SearchFormButtons;