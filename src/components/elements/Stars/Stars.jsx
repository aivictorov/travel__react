import './Stars.scss';

const Stars = ({ number }) => {

    let starsArray = [];

    for (let index = 0; index < number; index++) {
        starsArray.push(true)
    }

    return (
        <div className="stars">
            <div className="stars__icons">
                {starsArray.map((item, index) => {
                    return (
                        <svg key={index} width={16} height={16}>
                            <use href="#star-icon" />
                        </svg>
                    )
                })}
            </div>
            <div className="stars__text">
                {number > 0 ? number + ' Star Hotel' : 'No stars'}
            </div>
        </div>
    );
}

export default Stars;