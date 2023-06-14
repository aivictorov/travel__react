import './Stars.scss';

const Stars = () => {
    return (
        <div className="stars">
            <div className="stars__icons">
                <svg width={16} height={16}>
                    <use href="#star-icon" />
                </svg>
                <svg width={16} height={16}>
                    <use href="#star-icon" />
                </svg>
                <svg width={16} height={16}>
                    <use href="#star-icon" />
                </svg>
                <svg width={16} height={16}>
                    <use href="#star-icon" />
                </svg>
                <svg width={16} height={16}>
                    <use href="#star-icon" />
                </svg>
            </div>
            <div className="stars__text"> 5 Star Hotel</div>
        </div>
    );
}

export default Stars;