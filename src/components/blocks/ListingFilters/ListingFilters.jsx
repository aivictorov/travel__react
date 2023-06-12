import './FlightFilters.scss';
import ListingFilterDualRange from './ListingFilterDualRange';
import ListingFilterRadioButtons from './ListingFilterRadioButtons';
import ListingFilterCheckboxes from './ListingFilterCheckboxes';

const FlightFilters = ({ filterParams }) => {

    return (
        <>
            <ListingFilterDualRange
                name='price'
                title='Price'
                min={filterParams.price.min}
                max={filterParams.price.max}
                format='price'
            />
            {/* <ListingFilterDualRange
                    name='time'
                    title='Departure time'
                    format='time'
                /> */}
            <ListingFilterRadioButtons
                name='rating'
                title='Rating'
                min={filterParams.rating.min}
                max={filterParams.rating.max}
            />
            <ListingFilterCheckboxes
                name='airlines'
                title='Airlines'
                items={filterParams.airlines}
            />
        </>
    );
};

export default FlightFilters;