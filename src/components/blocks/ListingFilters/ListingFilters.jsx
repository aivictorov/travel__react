import './FlightFilters.scss';
import ListingFilterDualRange from './ListingFilterDualRange';
import ListingFilterRadioButtons from './ListingFilterRadioButtons';
import ListingFilterCheckboxes from './ListingFilterCheckboxes';

const FlightFilters = ({ renderFiltersFlag, changeFilter, airlineFilterItems, ratingFilterItems }) => {

    if (renderFiltersFlag) {
        return (
            <div className="listing-filters">
                <h3 className="listing-filters__title">Filters</h3>
                <ListingFilterDualRange
                    name='price'
                    title='Price'
                    changeFilter={changeFilter}
                    format='price'
                />
                <ListingFilterDualRange
                    name='time'
                    title='Departure time'
                    changeFilter={changeFilter}
                    format='time'
                />
                <ListingFilterRadioButtons
                    name='rating'
                    title='Rating'
                    names={['0+', '1+', '2+', '3+', '4+']}
                    items={ratingFilterItems}
                    changeFilter={changeFilter}
                />
                <ListingFilterCheckboxes
                    name='airline'
                    title='Airlines'
                    items={airlineFilterItems}
                    changeFilter={changeFilter}
                />
            </div>
        );
    } else {
        return (
            <div className="listing-filters">
                <h3 className="listing-filters__title">Filters</h3>
                <p>No available filters</p>
            </div>
        )
    };
};

export default FlightFilters;