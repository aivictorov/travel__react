import { useNavigate } from 'react-router-dom';

const SearchFormHotelsButtons = () => {
    const navigate = useNavigate();

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
                onClick={() => { navigate("/hotel-listing"); }}
            >
                <div className="button__icon">
                    <svg width={16} height={16}>
                        <use href="#building-icon" />
                    </svg>
                </div>
                Show Places
            </button>
        </div>
    );
}

export default SearchFormHotelsButtons;