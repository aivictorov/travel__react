import './ListingFilters.scss';
import ListingFiltersFlights from './ListingFiltersFlights';
import ListingFiltersHotels from './ListingFiltersHotels';

const ListingFilters = ({ layout, filterParams, changeFilter, resetTrigger }) => {

    return (
        <div className="listing-filters">
            <h3 className="listing-filters__title">
                Filters
            </h3>

            {layout === "flights" &&
                <ListingFiltersFlights
                    filterParams={filterParams}
                    changeFilter={changeFilter}
                    resetTrigger={resetTrigger}
                />
            }

            {layout === "hotels" &&
                <ListingFiltersHotels
                    filterParams={filterParams}
                    changeFilter={changeFilter}
                    resetTrigger={resetTrigger}
                />
            }

            {false &&
                <p>No available filters</p>
            }
        </div>
    )
};

export default ListingFilters;