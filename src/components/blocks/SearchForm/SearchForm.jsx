import { useContext } from 'react';
import './SearchForm.scss';
import SearchFormFlights from './SearchFormFlights';
import SearchFormHotels from './SearchFormHotels';
import { AppContext } from '../../../App';

const SearchForm = ({ page }) => {
    const { activeTabs, setActiveTabs } = useContext(AppContext);

    if (page === 'home') {
        return (
            <div
                className="search-form"
                tabs="search"
            >
                <div className="search-form__tabs">
                    <button
                        className="search-form__link"
                        type="button"
                        tab-button="flight-search"
                        tab-group="search"
                        onClick={() => {
                            setActiveTabs({ ...activeTabs, searchForm: 'flights' });
                        }}
                    >
                        <svg width={24} height={24}>
                            <use href="#flight-icon" />
                        </svg>
                        Flights
                    </button>
                    <button
                        className="search-form__link"
                        type="button"
                        tab-button="hotel-search"
                        tab-group="search"
                        onClick={() => {
                            setActiveTabs({ ...activeTabs, searchForm: 'hotels' });
                        }}
                    >
                        <svg width={24} height={24}>
                            <use href="#hotel-icon" />
                        </svg>
                        Stays
                    </button>
                </div>
                {activeTabs.searchForm === 'flights' && <SearchFormFlights layout="full" />}
                {activeTabs.searchForm === 'hotels' && <SearchFormHotels layout="full" />}
            </div>
        );
    };

    if (page === 'flight-search') {
        return (
            <div className="search-form">
                <div className="search-form__title">
                    Where are you flying?
                </div>
                <SearchFormFlights layout="full" />
            </div>
        );
    };

    if (page === 'flight-listing') {
        return (
            <div className="search-form search-form--listing">
                <SearchFormFlights layout="short" />
            </div>
        );
    };

    if (page === 'hotel-search') {
        return (
            <div className="search-form">
                <div className="search-form__title">
                    Where are you flying?
                </div>
                <SearchFormHotels layout="full" />
            </div>
        );
    };

    if (page === 'hotel-listing') {
        return (
            <div className="search-form search-form--listing">
                <SearchFormHotels layout="short" />
            </div>
        );
    };
};

export default SearchForm;