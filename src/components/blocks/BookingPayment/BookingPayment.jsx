import './BookingPayment.scss'

const BookingPayment = () => {

    return (
        <div className="booking-payment-methods">
            <div className="payment-radio" style={{ height: 80 }}>
                <input
                    className="payment-radio__input visually-hidden"
                    type="radio"
                    name="pay-methods"
                    id="full"
                    defaultChecked=""
                />
                <label className="payment-radio__label" htmlFor="full">
                    <div className="payment-radio__label-title">Pay in full</div>
                    <div className="payment-radio__label-text">
                        Pay the total and you are all set
                    </div>
                    <div className="payment-radio__custom-input"> </div>
                </label>
            </div>
            <div className="payment-radio" style={{ height: 100 }}>
                <input
                    className="payment-radio__input visually-hidden"
                    type="radio"
                    name="pay-methods"
                    id="part"
                />
                <label className="payment-radio__label" htmlFor="part">
                    <div className="payment-radio__label-title">
                        Pay part now, part later
                    </div>
                    <div className="payment-radio__label-text">
                        Pay $207.43 now, and the rest ($207.43) will be automatically
                        charged to the same payment method on Nov 14, 2022. No extra
                        fees.
                    </div>
                    <div className="payment-radio__custom-input"> </div>
                </label>
            </div>
            <a className="booking-payment-methods__link" href="#!">
                More info
            </a>
        </div>
    );
}

export default BookingPayment;