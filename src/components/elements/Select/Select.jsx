import './Select.scss';

const Select = () => {
    return (
        <div className="select">
            <button className="select__button" type="button">
                Return
            </button>
            <div className="select__label">Trip</div>
            <div className="select__icon">
                <svg width={24} height={24}>
                    <use href="#arrow-down" />
                </svg>
            </div>
            <ul className="select__list">
                <li data-value="Return">Return</li>
                <li data-value="Single">Single</li>
            </ul>
            <input
                className="select__input-hidden"
                type="text"
                name="select-category"
                defaultValue=""
            />
        </div>
    );
}

export default Select;