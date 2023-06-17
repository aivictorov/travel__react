import './BookingSummary.scss'

const BookingSummary = ({ title = "Emirates A380 Airbus" }) => {

    return (
        <div className="booking-summary">
            <div className="booking-summary__object">
                <div className="booking-summary__object-image">

                    <img
                        src="./img/flights/airline-example-1/logo-image.jpg"
                        alt="hotel"
                    />
                </div>
                <div className="booking-summary__object-info">
                    <div className="booking-summary__object-header">
                        <div className="booking-summary__object-title">
                            Economy
                        </div>
                        <div className="booking-summary__object-subtitle">
                            {title}
                        </div>
                    </div>
                    <div className="rating">
                        <div className="rating__value">4.2</div>
                        <span className="rating__text">
                            <strong>Very good</strong>
                        </span>
                        <a className="rating__link" href="#!">
                            54 reviews
                        </a>
                    </div>
                </div>
            </div>
            <div className="booking-summary__protected">
                Your booking is protected by <strong>golobe</strong>
            </div>
            <div className="booking-summary__details">
                <div className="booking-summary__title">Price Details</div>
                <div className="booking-summary__item">
                    <span>Base Fare</span>
                    <span>$240</span>
                </div>
                <div className="booking-summary__item">
                    <span>Discount</span>
                    <span>$0</span>
                </div>
                <div className="booking-summary__item">
                    <span>Taxes</span>
                    <span>$20</span>
                </div>
                <div className="booking-summary__item">
                    <span>Service Fee</span>
                    <span>$5</span>
                </div>
            </div>
            <div className="booking-summary__total">
                <span>Total </span>
                <span>$265</span>
            </div>
        </div>
    );
}

export default BookingSummary;