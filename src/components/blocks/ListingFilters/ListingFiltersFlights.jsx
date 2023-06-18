import ListingFilterDualRange from './ListingFilterDualRange';
import ListingFilterRadioButtons from './ListingFilterRadioButtons';
import ListingFilterCheckboxes from './ListingFilterCheckboxes';

const ListingFiltersFlights = ({ filterParams, changeFilter, resetTrigger }) => {

    return (
        <>
            <ListingFilterDualRange
                name='price'
                title='Price'
                min={filterParams.price.min}
                max={filterParams.price.max}
                format='price'
                changeFilter={changeFilter}
                resetTrigger={resetTrigger}
            />
            <ListingFilterRadioButtons
                name='rating'
                title='Rating'
                min={filterParams.rating.min}
                max={filterParams.rating.max}
                changeFilter={changeFilter}
                resetTrigger={resetTrigger}
            />
            <ListingFilterCheckboxes
                name='airlines'
                title='Airlines'
                items={filterParams.airlines}
                changeFilter={changeFilter}
                resetTrigger={resetTrigger}
            />
            {/* <ListingFilterDualRange
                name='time'
                title='Departure time'
                format='time'
            /> */}
        </>
    );
}

export default ListingFiltersFlights;