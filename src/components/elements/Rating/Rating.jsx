import './Rating.scss';

const Rating = ({ value }) => {

    let descriprion = '';

    value = parseFloat(value).toFixed(1);

    if (value === 5) {
        descriprion = 'Excellent'
    } else if (value >= 4) {
        descriprion = 'Very Good';
    } else if (value >= 3) {
        descriprion = 'Good';
    } else if (value >= 2) {
        descriprion = 'Medium';
    } else if (value >= 1) {
        descriprion = 'Low';
    } else if (value >= 0) {
        descriprion = 'Too low';
    };

    return (
        <div className="flight-card__rating">
            <div className="rating">
                <div className="rating__value">{value}</div>
                <span className="rating__text">
                    <strong>{descriprion}</strong>
                </span>
                <a className="rating__link" href="#">
                    54 reviews
                </a>
            </div>
        </div>
    );
}

export default Rating;