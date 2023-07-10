import './AddPromoCodeModal.scss';
import Button from './../../elements/Button/Button';
import Input from '../../elements/Input/Input';

const AddPromoCodeModal = () => {

    return (
        <div className='add-promo-code'>
            <h2 className="add-promo-code-modal__title">
                Enter promo code
            </h2>
            <div className="add-promo-code-modal__text">
                Please, enter your promo code in the field:
            </div>
            <div className="add-promo-code__input-wrapper">
                <Input
                    style="form"
                    label="Promo code"
                />
            </div>
            <div className="add-promo-code__button-wrapper">
                <Button
                    text="Submit"
                    style="dark w100"
                />
            </div>
        </div>
    );
}

export default AddPromoCodeModal;