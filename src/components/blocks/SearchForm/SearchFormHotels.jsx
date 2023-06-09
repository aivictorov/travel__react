import './SearchFormHotels.scss';
import SearchFormHotelsButtons from "./SearchFormHotelsButtons";

const SearchFormHotels = ({ layout, none }) => {
    return (
        <form
            className={`search-form__content ${none && 'none'}`}
            tab-content="hotel-search"
            tab-group="search"
        >
            <div className={`search-form__fields search-form__fields--hotels-${layout}`}>
                <div
                    className="input"
                >
                    <input
                        className="input__field"
                        type="text"
                        defaultValue="Istanbul, Turkey"
                    />
                    <div className="input__label">Enter Destination</div>
                </div>
                <div className="input">
                    <input
                        className="input__field"
                        type="text"
                        defaultValue="Fri 12/2"
                    />
                    <div className="input__label">Check In</div>
                    <button className="input__icon" type="button">
                        <svg width={24} height={24}>
                            <use href="#calendar-icon"> </use>
                        </svg>
                    </button>
                </div>
                <div className="input">
                    <input
                        className="input__field"
                        type="text"
                        defaultValue="Sun 12/4"
                    />
                    <div className="input__label">Check Out</div>
                    <button className="input__icon" type="button">
                        <svg width={24} height={24}>
                            <use href="#calendar-icon"> </use>
                        </svg>
                    </button>
                </div>
                <div className="input">
                    <input
                        className="input__field"
                        type="text"
                        defaultValue="1 room, 2 guests"
                    />
                    <div className="input__label">Rooms &amp; Guests</div>
                </div>
                <button
                    className="square-button"
                    type="button"
                    style={{ width: 56, height: 56 }}
                >
                    <svg width={24} height={24}>
                        <use href="#search-icon" />
                    </svg>
                </button>
            </div>
            {layout !== 'short' && <SearchFormHotelsButtons />}
        </form>
    );
};

export default SearchFormHotels;