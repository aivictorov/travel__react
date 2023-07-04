import './AddPromoCodeModal.scss';
import Button from './../../elements/Button/Button';
import Input from '../../elements/Input/Input';

const AddPromoCodeModal = () => {

    return (
        <div className='add-promo-code'>
            <div>Enter promo code it the field:</div>
            <div className="add-promo-code__input-wrapper">
                <Input style='form'/>
            </div>
            <Button text="Submit" style="dark" />
        </div>
    );
}

export default AddPromoCodeModal;