import './SearchFormTabs.scss';
import { useContext } from 'react';
import { AppContext } from './../../../App';

const SearchFormTabs = () => {
    const { activeTabs, setActiveTabs } = useContext(AppContext);

    return (
        <div className="search-form-tabs">
        <button
            className={`search-form-tabs__tab ${activeTabs.searchForm === 'flights' ? 'active' : null}`}
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
            className={`search-form-tabs__tab ${activeTabs.searchForm === 'hotels' ? 'active' : null}`}
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
    );
}

export default SearchFormTabs;