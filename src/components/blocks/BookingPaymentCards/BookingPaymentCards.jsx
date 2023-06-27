import './BookingPaymentCards.scss';
import AddCardButton from './../../modals/AddCard/AddCardButton';

const BookingPaymentCards = () => {
    return (
        <div className="booking-payment-cards">
            <div className="payment-radio" style={{ height: 80 }}>
                <input
                    className="payment-radio__input visually-hidden"
                    type="radio"
                    name="pay-cards"
                    id="card-1"
                    defaultChecked=""
                    checked
                />
                <label className="payment-radio__label" htmlFor="card-1">
                    <div className="booking-payment-cards__custom-label">
                        <div className="booking-payment-cards__custom-label-icon">
                            <svg width={32} height={32}>
                                <use href="#visa-icon" />
                            </svg>
                        </div>
                        <div className="booking-payment-cards__custom-label-text">
                            <span>**** 4565 </span>05/23
                        </div>
                    </div>
                    <div className="payment-radio__custom-input"> </div>
                </label>
            </div>
            <div className="payment-radio" style={{ height: 80 }}>
                <input
                    className="payment-radio__input visually-hidden"
                    type="radio"
                    name="pay-cards"
                    id="card-2"
                />
                <label className="payment-radio__label" htmlFor="card-2">
                    <div className="booking-payment-cards__custom-label">
                        <div className="booking-payment-cards__custom-label-icon">
                            <svg width={32} height={32}>
                                <use href="#visa-icon" />
                            </svg>
                        </div>
                        <div className="booking-payment-cards__custom-label-text">
                            <span>**** 4321 </span>02/27
                        </div>
                    </div>
                    <div className="payment-radio__custom-input"> </div>
                </label>
            </div>
            <div className="booking-payment-cards__add">
                <AddCardButton />
            </div>
        </div>
    );
}

export default BookingPaymentCards;