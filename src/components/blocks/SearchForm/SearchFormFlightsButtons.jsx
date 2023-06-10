const SearchFormFlightsButtons = ({ onClickFunction }) => {

    return (
        <div className="search-form__buttons">
            <button className="search-form__add-button" type="button">
                <svg width={16} height={16}>
                    <use href="#add-icon" />
                </svg>
                Add Promo Code
            </button>
            <button
                className="button"
                type="button"
                onClick={onClickFunction}
            >
                <div className="button__icon">
                    <svg width={16} height={16}>
                        <use href="#send-icon" />
                    </svg>
                </div>
                Show Filghts
            </button>
        </div>
    );
};

export default SearchFormFlightsButtons;