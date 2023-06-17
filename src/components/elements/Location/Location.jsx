import './Location.scss';

const Location = ({ text, style }) => {
    let addClass = '';
    if (style === 'small') addClass = ' location--small'

    return (
        <div className={`location${addClass}`}>
            <div className="location__icon">
                <svg width={18} height={18}>
                    <use href="#location" />
                </svg>
            </div>
            <a className="location__link" href="#!">
                {text}
            </a>
        </div>
    );
}

export default Location;