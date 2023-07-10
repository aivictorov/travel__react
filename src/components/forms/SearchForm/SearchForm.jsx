import './SearchForm.scss';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import SearchFormFlights from './SearchFormFlights';
import SearchFormHotels from './SearchFormHotels';
import SearchFormTabs from './SearchFormTabs';

const SearchForm = ({ page }) => {
    const { activeTabs, setActiveTabs } = useContext(AppContext);

    if (page === 'home') {
        return (
            <div
                className="search-form search-form--home"
                tabs="search"
            >
                <SearchFormTabs />
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