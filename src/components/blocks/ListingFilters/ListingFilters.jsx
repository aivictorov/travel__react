import './FlightFilters.scss';
import ListingFilterDualRange from './ListingFilterDualRange';
import ListingFilterRating from './ListingFilterRating';
import ListingFilterCheckboxes from './ListingFilterCheckboxes';

const FlightFilters = ({ changeFilter, airlineFilterItems }) => {

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
            <ListingFilterRating
                name='rating'
                title='Rating'
                items={['0+', '1+', '2+', '3+', '4+']}
                changeFilter={changeFilter}
            />
            <ListingFilterCheckboxes
                name='airline'
                title='Airlines'
                // items={['Emirates', 'Qatar', 'Fly Dubai', 'Etihad']}
                items={airlineFilterItems}
                changeFilter={changeFilter}
            />
            <ListingFilterCheckboxes
                name='trip'
                title='Trips'
                items={['Round trip', 'On Way', 'Multi-City', 'My Dates Are Flexible']}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default FlightFilters;