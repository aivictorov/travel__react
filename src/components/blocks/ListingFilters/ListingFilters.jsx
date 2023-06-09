import './FlightFilters.scss';
import ListingFilterPrice from './ListingFilterPrice';
import ListingFilterTime from './ListingFilterTime';
import ListingFilterRating from './ListingFilterRating';
import ListingFilterCheckboxes from './ListingFilterCheckboxes';

const FlightFilters = ({ changeFilter }) => {
    return (
        <div className="listing-filters">
            <h3 className="listing-filters__title">Filters</h3>
            <ListingFilterPrice
                name='price'
                title='Price'
                changeFilter={changeFilter}
            />
            <ListingFilterTime
                name='time'
                title='Departure time'
                changeFilter={changeFilter}
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
                items={['Emirates', 'Qatar', 'Fly Dubai', 'Etihad']}
                changeFilter={changeFilter}
            />
            <ListingFilterCheckboxes
                name='trip'
                title='Trips'
                items={['Round trip', ' On Way', 'Multi-City', 'My Dates Are Flexible']}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default FlightFilters;